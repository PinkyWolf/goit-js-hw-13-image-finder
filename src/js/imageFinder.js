import servise from './apiService.js';
import imageList from '../templates/cardTemplate.hbs';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load');

searchForm.addEventListener('submit', imageSearchInputHandler);
loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function imageSearchInputHandler(e) {

  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  servise.resetPage();
  servise.searchQuerry = input.value;

  servise.fetchGallery().then(hits => {
    const markup = buildListTemplate(hits);
    insertListItems(markup);
  });
  input.value = '';
}

function loadMoreBtnHandler() {
  servise.fetchGallery().then(hits => {
    const markup = buildListTemplate(hits);
    insertListItems(markup);
    scrollPages(0, 1000);
  }).catch(function (e) {
    console.log(e)
  });
}
function scrollPages() {
//получаем высоту страницы
const scrollValue = document.documentElement.scrollHeight;
//реализуем асинхронный scrollTo, чтобы метод корректно работал
setTimeout(() => {
window.scrollTo({
top: scrollValue,
behavior: 'smooth',
});
}, 100);
}
function insertListItems(items) {
  gallery.insertAdjacentHTML('beforeend', items);
}
function buildListTemplate(items) {
  return imageList(items);
}
function clearListItems() {
  gallery.innerHTML = '';
}
