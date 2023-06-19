import addNewListItem from './addNewListItem.js';
import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

jest.mock('./getLocalStorage.js', () => jest.fn());
jest.mock('./setLocalStorage.js', () => jest.fn());
jest.mock('./renderListItem.js', () => jest.fn());

describe('addNewListItem', () => {
  test('should add a new item to the localStorage', () => {
    const event = { preventDefault: jest.fn() };

    getLocalStorage.mockReturnValueOnce([]);

    addNewListItem({ description: 'Item 1' });

    // Assertions
    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(getLocalStorage).toHaveBeenCalled();
    expect(setLocalStorage).toHaveBeenCalledWith([
      { description: 'Item 1', completed: false, index: 1 },
    ]);
    expect(renderListItem).toHaveBeenCalled();
  });
});
