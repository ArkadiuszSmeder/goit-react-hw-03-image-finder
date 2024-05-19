import React from 'react';
import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImg } from 'styled/styled-imageGalleryItem';

export const ImageGalleryItem = ({ id, webformatURL, onClick }) => (
  <GalleryItem key={id} >
    <GalleryItemImg onClick={onClick} src={webformatURL} alt={`Object ${id}`} />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}