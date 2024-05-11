// import React from 'react';
// import { useQuery } from 'react-query'
// import { getImages } from 'utils/getImages'
// import { ImageGalleryItem } from './ImageGalleryItem';
 
// export const ImageGallery = ({ inputValue, page }) => {
//   const query = useQuery({ queryKey: ['image-gallery', inputValue, page], queryFn: () => getImages(inputValue, page) })
//   const { data: imageGallery, isLoading, error } = query
//   console.log(imageGallery)


//   return <>
//         {error && <p>Something went wrong: {error.message}</p>}
//         <ul>
//           {/* {!isLoading && !error && imageGallery.hits.map(({ id, webformatURL }) => <li key={id}><img src={webformatURL} alt={`Object ${id}`}/></li>)} */}
//           {!isLoading && !error && imageGallery.hits.map(({ id, webformatURL }) => <ImageGalleryItem key={id} id={id} webformatURL={webformatURL}/>)}
//         </ul>
//         {isLoading && <p>Loading...</p>}
//   </>
// }

import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import { getImages } from 'utils/getImages'
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from 'components/Button';

export const ImageGallery = ({ inputValue, page }) => {
  const [allImages, setAllImages] = useState([]); // Dodaje stan przechowujący wszystkie obrazy
  const [totalHits, setTotalHits] = useState(0);
  const query = useQuery({
    queryKey: ['image-gallery', inputValue, page],
    queryFn: () => getImages(inputValue, page),
    onSuccess: (imageGallery) => {
      console.log(imageGallery)
      console.log(imageGallery.totalHits)
      // Dodaje nowe obrazy do istniejącej kolekcji obrazków
      setAllImages((prevImages) => [...prevImages, ...imageGallery.hits]);
      setTotalHits(imageGallery.totalHits);
    }
  });

  const { isLoading, error } = query;

  useEffect(() => {
    setAllImages([]);
  }, [inputValue]); // Resetuje kolekcję obrazków po zmianie inputValue

  return (
    <>
      {error && <p>Something went wrong: {error.message}</p>}
      {isLoading && <p>Loading...</p>}

      <ul>
        {!isLoading && !error && allImages.map(({ id, webformatURL }) => (
          <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} />
        ))}
      </ul>
      {totalHits > 12 && <Button/>}
    </>
  );
}