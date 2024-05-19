import React, { useState } from "react";
import { AppContainer, ButtonContainer } from "styled/styled-appContainer";
import { ImageGallery } from './components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Button } from 'components/Button';
import { useQuery } from 'react-query'
import { getImages } from 'utils/getImages'


function App() {
  
  const [queryWord, setQueryWord] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [allImages, setAllImages] = useState([]); // Dodaje stan przechowujący wszystkie obrazy
  const [totalHits, setTotalHits] = useState(0);
  const query = useQuery({
    queryKey: ['image-gallery', queryWord, currentPage],
    queryFn: () => getImages(queryWord, currentPage),
    onSuccess: (imageGallery) => {
      // console.log(imageGallery)
      // console.log(imageGallery.totalHits)
      // Dodaje nowe obrazy do istniejącej kolekcji obrazków
      setAllImages((prevImages) => [...prevImages, ...imageGallery.hits]);
      setTotalHits(imageGallery.totalHits);
    }
  });

  const { isLoading, error } = query;

  const handleSearch = (value) => {
    setQueryWord(value);
    // console.log(value)
    setCurrentPage(1); // Resetowanie numeru strony przy każdym nowym wyszukiwaniu
    setAllImages([]);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPageCount => prevPageCount + 1);
    // console.log(currentPage)
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearch}/>
        <ImageGallery allImages={allImages} isLoading={isLoading} error={error}/>
        <ButtonContainer>
          {totalHits > 12 && allImages.length < totalHits && (<Button onClick={handleLoadMore}/>)}
        </ButtonContainer>
    </AppContainer>
  );
}

export default App;
