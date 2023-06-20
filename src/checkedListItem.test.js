import checkedListItem from './checkedListItem.js';

describe('checkedListItem', () => {
  it('should be called ', () => {
    const Value = true;
    const checkedFn = jest.fn();
    checkedListItem(checkedFn, Value);
    expect(checkedFn).toHaveBeenCalled();
  });
  it('should be called with the right value ', () => {
    const Value = true;
    const checkedFn = jest.fn();
    checkedListItem(checkedFn, Value);
    expect(checkedFn).toHaveBeenCalledWith(true);
  });
  it('should be returning the negation of the input argument', () => {
    const Value = false;
    const checkedFn = jest.fn((val) => !val);
    checkedListItem(checkedFn, Value);
    expect(checkedFn).toHaveReturnedWith(true);
  });
});
