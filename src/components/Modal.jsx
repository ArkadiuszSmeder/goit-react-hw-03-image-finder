import { useEffect } from 'react';
import PropTypes from "prop-types";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


export const Modal = ({ image }) => {
  useEffect(() => {

    const instance = basicLightbox.create(
      `
      <div class="overlay">
        <div class="modal">
          <img src="${image.largeImageURL}" alt="Object ${image.id}"/>
        </div>
      </div>
      `
    );

    instance.show();

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        instance.close();
      }
    };

    document.addEventListener('keydown', handleEsc);

    // return () => {
    //   document.removeEventListener('keydown', handleEsc);
    //   if (instance.visible()) {
    //     instance.close();
    //   }
    // };
  }, [image]);
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
}