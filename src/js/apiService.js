const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '21328187-7584fb099c072b2f511ba0ba1'

export default {
    pageNumber: 1,
    query: '',
    async fetchGallery(query) {
        const result = await fetch(`${BASE_URL}` + `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.pageNumber}&per_page=12&key=${API_KEY}`);
        const res = await result.json();
        this.incrementPage();
        return res.hits;
    },
    get searchQuerry() {
        return this.query;
    },
    set searchQuerry(string) {
        this.query = string;
    },
    incrementPage() {
        this.page += 1;
    },
    resetPage() {
        this.page = 1;
    },
};
