import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import removeListItem from './removeListItem.js';

const toDoContainer = document.querySelector('.to-do-list--container');

const renderListItem = () => {
  const toData = getLocalStorage();

  toDoContainer.innerHTML = '';

  toData.forEach((toDo) => {
    const div = document.createElement('div');
    div.className = 'to-do-list--item';
    const createInput = (type, className, value, eventListener) => {
      const input = document.createElement('input');
      input.type = type;
      input.className = className;
      input.value = value;
      if (eventListener) {
        input.addEventListener('change', eventListener);
      }
      return input;
    };
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

    const createIcon = (className, eventListener) => {
      const icon = document.createElement('i');
      icon.className = `fa-solid ${className}`;
      icon.classList.add('ellipse', 'drag');
      if (eventListener) {
        icon.addEventListener('mousedown', eventListener);
      }
      return icon;
    };

    const dotIcon = createIcon('fa-ellipsis-vertical');

    const binIcon = createIcon('fas fa-trash-alt pointer', () => {
      removeListItem(toDo.index);
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
