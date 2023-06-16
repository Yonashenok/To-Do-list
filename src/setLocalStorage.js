const setLocalStorage = (listItems) => {
  localStorage.setItem('toData', JSON.stringify(listItems));
};
export default setLocalStorage;
