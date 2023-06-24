import getLocalStorage from './getLocalStorage.js';
import renderListItem from './renderListItem.js';

const completedCont = document.querySelector('.to-do-completed--container');

const markCompleted = () => {
  const toData = getLocalStorage();
  const completed = toData.filter((item) => item.completed === true);
  renderListItem(completed, completedCont, false);
};
export default markCompleted;
