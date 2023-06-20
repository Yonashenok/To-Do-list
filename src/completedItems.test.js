import removeHandler from './removeHandler.js';
import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';

jest.mock('./getLocalStorage.js', () => jest.fn());
jest.mock('./setLocalStorage.js', () => jest.fn());

describe('removeHandler', () => {
  beforeEach(() => {
    getLocalStorage.mockClear();
    setLocalStorage.mockClear();
  });

  test('should remove completed items from the list', () => {
    const toData = [
      { description: 'Item 1', completed: false, index: 1 },
      { description: 'Item 2', completed: true, index: 2 },
      { description: 'Item 3', completed: false, index: 3 },
    ];

    getLocalStorage.mockReturnValueOnce(toData);

    removeHandler();

    // Assertions
    expect(getLocalStorage).toHaveBeenCalled();
    expect(setLocalStorage).toHaveBeenCalledWith([
      { description: 'Item 1', completed: false, index: 1 },
      { description: 'Item 3', completed: false, index: 2 },
    ]);
  });

  test('should not modify the list if removeIndex does not match any item index', () => {
    const toData = [
      { description: 'Item 1', completed: false, index: 1 },
      { description: 'Item 2', completed: false, index: 2 },
      { description: 'Item 3', completed: false, index: 3 },
    ];

    getLocalStorage.mockReturnValueOnce(toData);

    removeHandler(4);

    // Assertions
    expect(getLocalStorage).toHaveBeenCalled();
    // eslint-disable-next-line max-len
    expect(setLocalStorage).toHaveBeenCalledWith(toData); // Check if setLocalStorage was called with the same data
  });
});
