import axios from 'axios';

const API_KEY = '44034350-c8dd89b120010b9025e6f422d';
const BASE_URL = 'https://pixabay.com/api/';

export  async function fetchImages(query, page = 1) {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            key:API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: page,
        },
    });
    return response.data.hits;
}