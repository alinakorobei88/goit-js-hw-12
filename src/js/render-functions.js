import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250
});

export function showImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(image => 
        `<a href="${image.largeImageURL}" class="gallery_item">
        <image src="${image.webformatURL}" alt="${image.tags}" class="gallery_image" />
        <div class="gallery_info">
          <div class="info_labels">
              <p>Likes</p>
              <p>Views</p>
              <p>Comments</p>
              <p>Downloads</p>
        </div>
        <div class="info_values">
            <p>${image.likes}</p>
            <p>${image.views}</p>
            <p>${image.comments}</p>
            <p>${image.downloads}</p>
        </div>
        </div>
        </a>`).join('');
            
    gallery.insertAdjacentHTML('beforeend', markup);
    
        lightbox.refresh();
    }
    
    export function showMessage(message) {
        iziToast.error({title: 'Error', message});
    }
    
    export function showLoader() {
        document.querySelector('.div-loader').classList.remove('hidden');
    }
    
    export function hideLoader() {
        setTimeout(() => {
            document.querySelector('.div-loader').classList.add('hidden');
        }, 500); // Затримка в 500 мілісекунд
    }