import { fetchImages } from './js/pixabay-api.js';
import { showImages, showMessage, showLoader, hideLoader } from './js/render-functions.js';

let page = 1;
let query = '';

document.querySelector('.search-form').addEventListener('submit', async(event) => {
    event.preventDefault();
    const query = event.target.elements.search_query.value.trim();
    page = 1;

    if (query === '') {
        showMessage('Please enter a search query.');
        return;
    }

        // Очищення форми та галереї
        document.querySelector('.gallery').innerHTML = '';
        event.target.reset();

    showLoader();

    try {
        const images = await fetchImages(query, page);
        hideLoader();
        if (images.length === 0) {
            showMessage('Sorry, there are no images matching your search query. Please try again!');
        } else {
            showImages(images);
            document.querySelector('.load-more').classList.remove('hidden');
    }
}
catch(error) {
    hideLoader();
    showMessage('An error occurred while fetching images. Please try again later.');
    console.error('Error fetching images:', error);
}
});

document.querySelector('.load-more').addEventListener('click', async() => {
    page++;
    showLoader();

    try {
        const images = await fetchImages(query, page);
        hideLoader();
        if(images.length === 0){
            showMessage("We're sorry, but you've reached the end of search results.");
            document.querySelector('.load-more').classList.add('hidden');
        }
        else{
            showImages(images);
            smoothScroll();
        }
        }
        catch(error) {
            hideLoader();
            showMessage('An error occurred while fetching images. Please try again later.');
            console.error('Error fetching images:', error);
        }
});

function smoothScroll() {
    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}