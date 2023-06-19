import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

const addNewListItem = (newItem) => {
  const toData = getLocalStorage();
  toData.push({
    description: newItem.description,
    completed: false,
    index: toData.length + 1,
  });
  setLocalStorage(toData);
  renderListItem();
};

export default addNewListItem;
