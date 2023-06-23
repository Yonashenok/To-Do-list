import './style/index.scss';
import getLocalStorage from './getLocalStorage.js';
import renderListItem from './renderListItem.js';
import addNewListItem from './addNewListItem.js';
import removeHandler from './removeHandler.js';
import markUncompleted from './markUncompleted.js';

const allCont = document.querySelector('.to-do-list--container');
const completedCont = document.querySelector('.to-do-completed--container');

const init = () => {
  const toData = getLocalStorage();

  renderListItem(toData, allCont);
  markUncompleted();
  const completed = toData.filter((item) => item.completed === true);
  renderListItem(completed, completedCont);
};
init();

const form = document.querySelector('.to-do-form');
const overly = document.querySelector('.overly');
const removeBtn = document.querySelector('.to-do--btn');
const createBtn = document.querySelector('.create-to-btn');
const btnClose = document.querySelector('.btn-close');
const navLink = document.querySelectorAll('.to-do-nav-link');
const navContainer = document.querySelector('.to-do-nav');
const timeDate = document.querySelector('.time-date');
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
  const toData = getLocalStorage();
  renderListItem(toData, allCont);
  markUncompleted();
});

navContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.to-do-nav-link');
  if (!clicked) return;
  navLink.forEach((link) => {
    link.classList.remove('OnClickLink');
  });

  clicked.classList.add('OnClickLink');
});

const setTime = () => {
  const date = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  timeDate.textContent = new Intl.DateTimeFormat('en-GB', options).format(date);
};

setInterval(setTime, 100);
