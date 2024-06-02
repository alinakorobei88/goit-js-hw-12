import { fetchImages } from './js/pixabay-api.js';
import { showImages, showMessage, showLoader, hideLoader } from './js/render-functions.js';

let page = 1;
let query = '';
let totalHits = 0;
const perPage = 15;

document.querySelector('.search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    query = event.target.elements.search_query.value.trim();
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
        const { hits, totalHits: total } = await fetchImages(query, page);
        hideLoader();
        totalHits = total;
        if (hits.length === 0) {
            showMessage('Sorry, there are no images matching your search query. Please try again!');
        } else {
            showImages(hits);
            document.querySelector('.load-more').classList.remove('hidden');
            if (totalHits <= perPage) {
                document.querySelector('.load-more').classList.add('hidden');
                showMessage("We're sorry, but you've reached the end of search results.");
            }
        }
    } catch (error) {
        hideLoader();
        showMessage('An error occurred while fetching images. Please try again later.');
        console.error('Error fetching images:', error);
    }
});

document.querySelector('.load-more').addEventListener('click', async () => {
    page++;
    showLoader();

    try {
        const { hits } = await fetchImages(query, page);
        hideLoader();
        if (hits.length === 0 || page * perPage >= totalHits) {
            showMessage("We're sorry, but you've reached the end of search results.");
            document.querySelector('.load-more').classList.add('hidden');
        } else {
            showImages(hits);
            smoothScroll();
        }
    } catch (error) {
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