import axios from 'axios';

const API_KEY = '47647589-b8e3be9abf9fcf69ccbc2b85f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 20,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('API error:', error);
      throw new Error('Failed to fetch images');
    });
}
