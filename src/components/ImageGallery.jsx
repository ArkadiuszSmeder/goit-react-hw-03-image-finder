import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import { getImages } from 'utils/getImages'
import { ImageGalleryItem } from './ImageGalleryItem';
 
export const ImageGallery = ({ inputValue, page }) => {
  const query = useQuery({ queryKey: ['image-gallery', inputValue, page], queryFn: () => getImages(inputValue, page) })
  const { data: imageGallery, isLoading, error } = query


  return <>
        {error && <p>Something went wrong: {error.message}</p>}
        <ul>
          {/* {!isLoading && !error && imageGallery.hits.map(({ id, webformatURL }) => <li key={id}><img src={webformatURL} alt={`Object ${id}`}/></li>)} */}
          {!isLoading && !error && imageGallery.hits.map(({ id, webformatURL }) => <ImageGalleryItem key={id} id={id} webformatURL={webformatURL}/>)}
        </ul>
        {isLoading && <p>Loading...</p>}
  </>
}

