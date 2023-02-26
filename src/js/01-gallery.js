// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createGalleryItems(galleryItems) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    )
    .join('');

  return markup;
};

galleryRef.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

/* const gallery = new SimpleLightbox('.gallery__item');

gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250; */

let gallery = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionDelay: 250,
});






/* import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

createGallery();

let lightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery() {
  const galleryItemsEl = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
        `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);
} */