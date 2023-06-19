import addNewListItem from './addNewListItem.js';
import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderListItem from './renderListItem.js';

jest.mock('./getLocalStorage.js', () => jest.fn());
jest.mock('./setLocalStorage.js', () => jest.fn());
jest.mock('./renderListItem.js', () => jest.fn());

describe('addNewListItem', () => {
  test('should add a new item to the localStorage and trigger renderListItem', () => {
    // Mock the necessary variables and functions
    const event = { preventDefault: jest.fn() };
    const toData = [{ description: 'Item 1', completed: false, index: 1 }];
    const updatedData = [
      { description: 'Item 1', completed: false, index: 1 },
      { description: 'Item 2', completed: false, index: 2 },
    ];

    getLocalStorage.mockReturnValueOnce(toData); // Mock the return value of getLocalStorage
    setLocalStorage.mockImplementationOnce(() => {}); // Mock setLocalStorage to do nothing

    // Call the addNewListItem function with the newList value
    addNewListItem(event, 'Item 2');

    // Assertions
    expect(event.preventDefault).toHaveBeenCalled();
    expect(getLocalStorage).toHaveBeenCalled();
    expect(setLocalStorage).toHaveBeenCalledWith(updatedData);
    expect(renderListItem).toHaveBeenCalled();
  });
});
