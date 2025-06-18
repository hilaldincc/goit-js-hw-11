export function createGalleryMarkup(images) {
  return images
    .map(image => {
      return `
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <div class="card-info">
              <div class="info-block">
                <p class="label">Likes</p>
                <p class="value">${image.likes}</p>
              </div>
              <div class="info-block">
                <p class="label">Views</p>
                <p class="value">${image.views}</p>
              </div>
              <div class="info-block">
                <p class="label">Comments</p>
                <p class="value">${image.comments}</p>
              </div>
              <div class="info-block">
                <p class="label">Downloads</p>
                <p class="value">${image.downloads}</p>
              </div>
            </div>
          </a>
        `;
    })
    .join('');
}
