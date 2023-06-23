import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';
import markUncompleted from './markUncompleted.js';

const newList = document.querySelector('.to-do-form--input');
const allCont = document.querySelector('.to-do-list--container');

const addNewListItem = (e) => {
  e.preventDefault();
  const toData = getLocalStorage();
  toData.push({
    description: newList.value,
    completed: false,
    index: toData.length + 1,
  });
  newList.value = '';
  setLocalStorage(toData);
  renderListItem(toData, allCont);
  markUncompleted();
};
export default addNewListItem;
