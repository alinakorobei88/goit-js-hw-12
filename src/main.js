import { fetchImages } from './js/pixabay-api.js';
import { showImages, showMessage, showLoader, hideLoader } from './js/render-functions.js';

let page = 1;
let query = '';
let totalHits = 0;
const perPage = 15;
let allResultsLoaded = false;
const loadMoreBtn = document.querySelector('.load-more');

document.querySelector('.search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    query = event.target.elements.search_query.value.trim();
    page = 1;

    if (!query) {
        showMessage('Please enter a search query');
        return;
    }

    // Очищення форми та галереї
    document.querySelector('.gallery').innerHTML = '';
    loadMoreBtn.classList.add('hidden');
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
            
            if (totalHits > perPage) {
                loadMoreBtn.classList.remove('hidden');
            }
        }
    } catch (error) {
        showMessage('An error occurred while fetching images. Please try again later.');
        console.error('Error fetching images:', error);
    } 
});

loadMoreBtn.addEventListener('click', async () => {
    if (allResultsLoaded) return;

    page++;
    showLoader();

    try {
        const { hits } = await fetchImages(query, page);
        hideLoader();
        showImages(hits);
        smoothScroll();
        if (Math.ceil(totalHits / perPage) === page) {
            showMessage("We're sorry, but you've reached the end of search results.");
            allResultsLoaded = true;
            loadMoreBtn.classList.add('hidden');
        } 
    } catch (error) {
        hideLoader();
        showMessage('An error occurred while fetching images. Please try again later.');
        console.error('Error fetching images:', error);
    }
});
loadMoreBtn.classList.add('hidden');

function smoothScroll() {
    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}