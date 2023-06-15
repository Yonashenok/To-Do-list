import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

const removeListItem = (e) => {
  const removeIndex = e.target.parentElement.dataset.toggle;
  const toData = getLocalStorage();

  const newData = toData.filter((item) => item.index !== +removeIndex);
  for (let i = 0; i < newData.length; i += 1) {
    newData[i].index = i;
  }

  setLocalStorage(newData);
  renderListItem();
};
export default removeListItem;
