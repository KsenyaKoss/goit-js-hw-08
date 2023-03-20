// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const createListItems = galleryItems.map(
    ({preview, original, description}) => `
    <a class="gallery__item" href ="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
).join('');

gallery.insertAdjacentHTML('afterbegin', createListItems);

const options = {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
  };
  
const lightbox = new SimpleLightbox('.gallery a', options);


