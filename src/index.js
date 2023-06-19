import './style/index.scss';
import renderListItem from './renderListItem.js';
import addNewListItem from './addNewListItem.js';
import removeHandler from './removeHandler.js';

const init = () => {
  renderListItem();
};
init();
const form = document.querySelector('.to-do-form');
const overly = document.querySelector('.overly');
const removeBtn = document.querySelector('.to-do--btn');
const createBtn = document.querySelector('.create-to-btn');
const btnClose = document.querySelector('.btn-close');
createBtn.addEventListener('click', () => {
  overly.classList.toggle('hidden');
});
form.addEventListener('submit', (e) => {
  addNewListItem(e);
  overly.classList.toggle('hidden');
});

btnClose.addEventListener('click', () => {
  overly.classList.toggle('hidden');
});
removeBtn.addEventListener('click', () => {
  removeHandler(null);
  renderListItem();
});
