import getLocalStorage from './getLocalStorage.js';
import renderListItem from './renderListItem.js';

const uncompletedCont = document.querySelector('.to-do-uncompleted--container');

const markUncompleted = () => {
  const toData = getLocalStorage();
  const completed = toData.filter((item) => item.completed !== true);
  renderListItem(completed, uncompletedCont);
};
export default markUncompleted;
