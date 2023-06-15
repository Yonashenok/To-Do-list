import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

const newList = document.querySelector('.to-do-form--input');

const addNewListItem = (e) => {
  e.preventDefault();
  const toData = getLocalStorage();
  toData.push({
    description: newList.value,
    completed: false,
    index: toData.length,
  });
  newList.value = '';
  setLocalStorage(toData);
  renderListItem();
};
export default addNewListItem;
