import './style/index.scss';
import getLocalStorage from './getLocalStorage.js';
import renderListItem from './renderListItem.js';
import addNewListItem from './addNewListItem.js';
import removeHandler from './removeHandler.js';
import markUncompleted from './markUncompleted.js';
import markCompleted from './markCompleted.js';

const allCont = document.querySelector('.to-do-list--container');
const completedCont = document.querySelector('.to-do-completed--container');

const init = () => {
  const toData = getLocalStorage();

  renderListItem(toData, allCont, true);
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
const btn = document.querySelectorAll('.to-do-clear-btn ');
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
  renderListItem(toData, allCont, true);
  markUncompleted();
  markCompleted();
});

navContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.to-do-nav-link');
  if (!clicked) return;
  const id = e.target.closest('.to-do-nav-link').dataset.show;
  navLink.forEach((link) => {
    link.classList.remove('OnClickLink');
  });
  btn.forEach((btnCon) => {
    btnCon.classList.add('hidden');
  });

  clicked.classList.add('OnClickLink');
  if (!id) return;
  document.querySelector(`.btn-${id}`).classList.remove('hidden');
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
