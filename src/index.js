import './style/index.css';
import renderListItem from './renderListItem.js';
import addNewListItem from './addNewListItem.js';
import removeListItem from './removeListItem.js';
// import getLocalStorage from './getLocalStorage.js';
// import setLocalStorage from './setLocalStorage.js';
// import { toggle } from './toggleDot.js';

const init = () => {
  renderListItem();
};
init();
const binIcon = document.querySelectorAll('.bin-icon');
// const dotIcon = document.querySelectorAll('.dot-icon');
const form = document.querySelector('.to-do-form');

// const removeItem = (e) => {
//   const removeIndex = e.target.closest('div').dataset.toggle;
//   removeListItem(removeIndex);
// };
form.addEventListener('submit', addNewListItem);

binIcon.forEach((btn) => btn.addEventListener('click', removeListItem));

// localStorage.clear();
