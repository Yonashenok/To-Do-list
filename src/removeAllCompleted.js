import getLocalStorage from './getLocalStorage';
import renderListItem from './renderListItem';
import setLocalStorage from './setLocalStorage';

const allRemoveHandler = () => {
  const toData = getLocalStorage();
  const newData = toData.filter((item) => item.completed !== true);
  setLocalStorage(newData);
  renderListItem();
};
export default allRemoveHandler;
