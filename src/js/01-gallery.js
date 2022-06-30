

import SimpleLightbox from "./simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// let lightbox = $('.gallery a').simpleLightbox({ captionsData: "alt",
//     captionPosition: "bottom",
//     captionDelay: 250,
// });

// new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionPosition: "bottom",
//     captionDelay: 250,
//   });
new SimpleLightbox('.gallery a');