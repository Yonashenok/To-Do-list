import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import removeHandler from './removeHandler.js';
import createInput from './createInput.js';
import createIcon from './createIcon.js';
import dragDrop from './dragDrop.js';

const toDoContainer = document.querySelector('.to-do-list--container');

const renderListItem = () => {
  const toData = getLocalStorage();

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

    const inputCheckBox = createInput('checkbox', 'checkbox', null, () => {
      inputText.blur();
      toDo.completed = !toDo.completed;
      inputText.classList.toggle('checked');
      setLocalStorage(toData);
    });
    inputCheckBox.checked = toDo.completed;

    const dotIcon = createIcon('fa-ellipsis-vertical');

    const binIcon = createIcon('fas fa-trash-alt pointer', () => {
      removeHandler(toDo.index);
      renderListItem();
    });
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
        toDo.description = inputText.value;
        setLocalStorage(toData);
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

    div.appendChild(inputCheckBox);
    div.appendChild(inputText);
    div.appendChild(dotIcon);
    div.appendChild(binIcon);
    toDoContainer.appendChild(div);
  });
};
export default renderListItem;
