import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';

const removeListItem = (removeIndex) => {
  const toData = getLocalStorage();
  const newData = toData.filter((item) => item.index !== removeIndex);
  for (let i = 0; i < newData.length; i += 1) {
    newData[i].index = i;
  }

  setLocalStorage(newData);
};
export default removeListItem;
