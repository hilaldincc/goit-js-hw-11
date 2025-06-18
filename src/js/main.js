import { fetchImages } from './api'; // Henüz yazmadık, az sonra yazacağız
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryMarkup } from './markup.js';

// DOM elemanları
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Lightbox tanımla
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = form.elements.searchQuery.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Oops!',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  form.elements.searchQuery.disabled = true;
  form.elements.searchQuery.style.opacity = '0.5';

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  fetchImages(searchQuery)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query.<br>Please, try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          titleColor: '#FFFFFF',
          timeout: 4000,
          layout: 2,
          maxWidth: 432,
          class: 'custom-toast',
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828665.png',
          progressBarColor: '#B51B1B',
        });
        return;
      }

      const markup = createGalleryMarkup(images);
      gallery.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
      form.elements.searchQuery.disabled = false;
      form.elements.searchQuery.style.opacity = '1';
      form.reset();
    });
});
