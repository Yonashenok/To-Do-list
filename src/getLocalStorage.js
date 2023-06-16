const getLocalStorage = () => JSON.parse(localStorage.getItem('toData')) || [];
export default getLocalStorage;
