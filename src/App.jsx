// import { QueryClient, QueryClientProvider } from 'react-query'
// import React, { useState } from "react";
// import { AppContainer } from "styled/styled-appContainer";
// import { ImageGallery } from './components/ImageGallery';
// import { Searchbar } from 'components/Searchbar';
// import { Button } from 'components/Button';
// import { useQuery } from 'react-query'
// import { getImages } from 'utils/getImages'


// const queryClient = new QueryClient()

// function App() {
  
//   const [queryWord, setQueryWord] = useState('');
//   const [pageCount, setPageCount] = useState(1);

//   const handleSearch = (value) => {
//     setQueryWord(value);
//     console.log(value)
//     setPageCount(1); // Resetowanie numeru strony przy każdym nowym wyszukiwaniu
//   };

//   const handleLoadMore = () => {
//     setPageCount(prevPageCount => prevPageCount + 1);
//   };

//   return (
//     <AppContainer>
//       <Searchbar onSubmit={handleSearch}/>
//       <QueryClientProvider client={queryClient}>
//         <ImageGallery inputValue={queryWord} page={pageCount}/>
//         <Button onClick={handleLoadMore}/>
//       </QueryClientProvider>
//     </AppContainer>
//   );
// }

// export default App;


import React, { useState } from "react";
import { AppContainer } from "styled/styled-appContainer";
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
      console.log(imageGallery)
      console.log(imageGallery.totalHits)
      // Dodaje nowe obrazy do istniejącej kolekcji obrazków
      setAllImages((prevImages) => [...prevImages, ...imageGallery.hits]);
      setTotalHits(imageGallery.totalHits);
    }
  });

  const { isLoading, error } = query;

  const handleSearch = (value) => {
    setQueryWord(value);
    console.log(value)
    setCurrentPage(1); // Resetowanie numeru strony przy każdym nowym wyszukiwaniu
    setAllImages([]);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPageCount => prevPageCount + 1);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearch}/>
        <ImageGallery allImages={allImages} isLoading={isLoading} error={error}/>
        {totalHits > 12 && allImages.length < totalHits && (<Button onClick={handleLoadMore}/>)}
    </AppContainer>
  );
}

export default App;
