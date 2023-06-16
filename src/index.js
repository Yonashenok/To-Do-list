import './style/index.css';
import renderListItem from './renderListItem.js';
import addNewListItem from './addNewListItem.js';

const init = () => {
  renderListItem();
};
init();
const form = document.querySelector('.to-do-form');
form.addEventListener('submit', addNewListItem);
