import './style/index.css';
import renderListItem from './renderListItem.js';
import addNewListItem from './addNewListItem.js';
import removeHandler from './removeHandler.js';

const init = () => {
  renderListItem();
};
init();
const form = document.querySelector('.to-do-form');
const removeBtn = document.querySelector('.to-do--btn');

form.addEventListener('submit', addNewListItem);
removeBtn.addEventListener('click', () => {
  removeHandler(null);
  renderListItem();
});
