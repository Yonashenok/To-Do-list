import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

const addNewListItem = (e, newValue) => {
  e.preventDefault();
  const toData = getLocalStorage();
  toData.push({
    description: newValue,
    completed: false,
    index: toData.length + 1,
  });
  setLocalStorage(toData);
  renderListItem();
};

export default addNewListItem;
