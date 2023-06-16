import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

const removeListItem = (removeIndex) => {
  const toData = getLocalStorage();
  console.log(removeIndex);
  const newData = toData.filter((item) => item.index !== removeIndex);
  for (let i = 0; i < newData.length; i += 1) {
    newData[i].index = i;
  }

  setLocalStorage(newData);
  renderListItem();
};
export default removeListItem;
