import getLocalStorage from './getLocalStorage.js';
import renderListItem from './renderListItem.js';
import setLocalStorage from './setLocalStorage.js';

const allRemoveHandler = () => {
  const toData = getLocalStorage();
  const newData = toData.filter((item) => item.completed !== true);
  setLocalStorage(newData);
  renderListItem();
};
export default allRemoveHandler;
