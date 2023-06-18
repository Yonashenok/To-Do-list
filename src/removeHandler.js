import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';

const removeHandler = (removeIndex) => {
  const toData = getLocalStorage();
  const newData = removeIndex
    ? toData.filter((item) => item.index !== removeIndex)
    : toData.filter((item) => item.completed !== true);
  for (let i = 0; i < newData.length; i += 1) {
    newData[i].index = i + 1;
  }
  setLocalStorage(newData);
};
export default removeHandler;
