import React, { useState } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Modal } from './Modal';
import PropTypes from "prop-types";
import { Gallery } from 'styled/styled-imageGallery';
import { LoaderContainer } from 'styled/styled-loader';



export const ImageGallery = ({ allImages, isLoading, error }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  const showModal = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Gallery>
        {allImages.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onClick={() => showModal({ id, largeImageURL })} />
        ))}
      </Gallery>
      {error && <p>Something went wrong: {error.message}</p>}
      <LoaderContainer>
        {isLoading && <Loader/>}
      </LoaderContainer>
        {selectedImage && <Modal image={selectedImage}/>}
    </>
  );
}

ImageGallery.propTypes = {
  allImages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}