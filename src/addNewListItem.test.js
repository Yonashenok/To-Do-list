import addNewListItem from './addNewListItem.js';
import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

jest.mock('./getLocalStorage.js', () => jest.fn());
jest.mock('./setLocalStorage.js', () => jest.fn());
jest.mock('./renderListItem.js', () => jest.fn());

// add new item test

describe('addNewListItem', () => {
  test('should add a new item to list', () => {
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

  // add save item to storage test

  test('should save the item to storage', () => {
    const event = { preventDefault: jest.fn() };
    const toData = [];

    getLocalStorage.mockReturnValueOnce(toData);

    const newItem = { description: 'Item 1' };
    addNewListItem(newItem);

    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(getLocalStorage).toHaveBeenCalled();
    expect(setLocalStorage).toHaveBeenCalledWith([
      { description: 'Item 1', completed: false, index: 1 },
    ]);
    expect(renderListItem).toHaveBeenCalled();
  });
});
