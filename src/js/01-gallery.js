

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const imageContainer = document.querySelector('.gallery');

const elMarkup = createGalMarkup(galleryItems);

imageContainer.insertAdjacentHTML('afterbegin', elMarkup);

// Create and map elements
function createGalMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}">
       </a>
`;
    })
    .join('');
}

const lightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
