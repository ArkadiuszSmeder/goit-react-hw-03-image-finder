import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';


export const ImageGallery = ({ allImages, isLoading, error }) => {

  const showModal = (value) => {
    console.log(value)
  }

  return (
    <>
      <ul>
        {allImages.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} onClick={showModal(largeImageURL)} />
        ))}
      </ul>
      {error && <p>Something went wrong: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
}