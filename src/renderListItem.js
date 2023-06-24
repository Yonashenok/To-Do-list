import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import checkedListItem from './checkedListItem.js';
import removeHandler from './removeHandler.js';
import editListItem from './editListItem.js';
import createInput from './createInput.js';
import createIcon from './createIcon.js';
import dragDrop from './dragDrop.js';
import checked from './checked.js';
import edit from './edit.js';

const allCont = document.querySelector('.to-do-list--container');
const uncompletedCont = document.querySelector('.to-do-uncompleted--container');
const completedCont = document.querySelector('.to-do-completed--container');

const renderListItem = (toData, toDoContainer, state) => {
  toDoContainer.innerHTML = '';

  toData.forEach((toDo) => {
    const div = document.createElement('div');
    div.className = 'to-do-list--item';
    div.draggable = true;

    const inputText = createInput('text', 'task', toDo.description, () => {
      if (inputText.value !== '') {
        toDo.description = inputText.value;
        setLocalStorage(toData);
        inputText.blur();
      }
    });

    const inputCheckBox = state
      ? createInput('checkbox', 'checkbox', null, () => {
        inputText.blur();
        inputText.classList.toggle('checked');
        toDo.completed = checkedListItem(checked, toDo.completed);
        setLocalStorage(toData);
        const Data = getLocalStorage();
        const uncompleted = Data.filter((item) => item.completed !== true);
        const completed = Data.filter((item) => item.completed === true);
        renderListItem(completed, completedCont, false);
        renderListItem(uncompleted, uncompletedCont, false);
      })
      : '';
    if (inputCheckBox) inputCheckBox.checked = toDo.completed;
    if (inputCheckBox.checked) inputText.classList.add('checked');

    const dotIcon = createIcon('fa-ellipsis-vertical fa-xl');
    dotIcon.style = 'color: #913af6';

    const binIcon = createIcon(
      'fa-solid fa-xmark fa-beat-fade fa-xl pointer',
      () => {
        removeHandler(toDo.index);
        const Data = getLocalStorage();
        renderListItem(Data, allCont, true);
        const uncompleted = Data.filter((item) => item.completed !== true);
        const completed = Data.filter((item) => item.completed === true);
        renderListItem(completed, completedCont, false);
        renderListItem(uncompleted, uncompletedCont, false);
      },
    );
    binIcon.style = 'color: #913afe;';
    binIcon.style.display = 'none';

    const toggleIcons = () => {
      dotIcon.style.display = 'block';
      binIcon.style.display = 'none';
      div.classList.toggle('selected');
      inputText.classList.toggle('selected');
    };

    inputText.addEventListener('blur', toggleIcons);
    inputText.addEventListener('focus', () => {
      div.classList.toggle('selected');
      inputText.classList.toggle('selected');
      dotIcon.style.display = 'none';
      binIcon.style.display = 'block';
    });
    inputText.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && inputText.value !== '') {
        const inputTextValue = inputText.value;
        toDo.description = editListItem(edit, inputTextValue);
        inputText.blur();
      }
    });

    div.addEventListener('dragstart', () => {
      div.classList.add('dragging');
      inputText.classList.add('dragging');
      inputText.blur();
    });
    div.addEventListener('dragend', () => {
      div.classList.remove('dragging');
      inputText.classList.remove('dragging');
      inputText.blur();
    });

    toDoContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      const afterElement = dragDrop(e.clientY);
      if (afterElement === null) {
        toDoContainer.appendChild(draggable);
      } else {
        toDoContainer.insertBefore(draggable, afterElement);
      }
    });
    div.addEventListener('click', () => {
      inputText.focus();
    });

    if (inputCheckBox) div.appendChild(inputCheckBox);
    div.appendChild(inputText);
    div.appendChild(dotIcon);
    div.appendChild(binIcon);
    toDoContainer.appendChild(div);
  });
};
export default renderListItem;
