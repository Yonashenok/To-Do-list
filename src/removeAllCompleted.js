import getLocalStorage from './getLocalStorage.js';
import renderListItem from './renderListItem.js';
import setLocalStorage from './setLocalStorage.js';

const allRemoveHandler = () => {
  const toData = getLocalStorage();
  const newData = toData.filter((item) => item.completed !== true);
  for (let i = 0; i < newData.length; i += 1) {
    newData[i].index = i;
  }
  setLocalStorage(newData);
  renderListItem();
};
export default allRemoveHandler;
