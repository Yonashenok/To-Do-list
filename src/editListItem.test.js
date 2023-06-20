import editListItem from './editListItem.js';

// jest.mock('./editListItem', () => jest.fn());

describe('editListItem', () => {
  it('should be called ', () => {
    const newValue = 'to do';
    const editItem = jest.fn();
    editListItem(editItem, newValue);
    expect(editItem).toHaveBeenCalled();
  });
  it('should be called with the right value ', () => {
    const newValue = 'to do';
    const editItem = jest.fn();
    editListItem(editItem, newValue);
    expect(editItem).toHaveBeenCalledWith(newValue);
  });

  it('should be return input value', () => {
    const newValue = 'to do task';
    const editItem = jest.fn((val) => val);
    editListItem(editItem, newValue);
    expect(editItem).toHaveReturnedWith('to do task');
  });
});
