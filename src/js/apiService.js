const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '21328187-7584fb099c072b2f511ba0ba1'

fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`)