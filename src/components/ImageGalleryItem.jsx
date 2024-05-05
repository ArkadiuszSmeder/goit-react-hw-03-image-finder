import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL }) => (
  <li key={id}>
    <img src={webformatURL} alt={`Object ${id}`} />
  </li>
);
