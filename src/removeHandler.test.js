import removeHandler from './removeHandler.js';
import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';

jest.mock('./getLocalStorage', () => jest.fn());
jest.mock('./setLocalStorage', () => jest.fn());
describe('removeHandler', () => {
  it('should call getLocalStorage to get data from local storage ', () => {
    getLocalStorage.mockImplementation(() => []);
    removeHandler();
    expect(getLocalStorage).toBeCalled();
  });
  it('should get array data from local storage when we call from getLocalStorage', () => {
    getLocalStorage.mockReturnValue([]);
    removeHandler();
    expect(getLocalStorage()).toEqual([]);
  });
  it('should call setLocalStorage to save data  to local storage', () => {
    setLocalStorage.mockImplementation();
    removeHandler();
    expect(setLocalStorage).toBeCalled();
  });
  it('should be call setLocalStorage with an array', () => {
    setLocalStorage.mockImplementation();
    removeHandler();
    expect(setLocalStorage).toHaveBeenCalledWith([]);
  });
});
