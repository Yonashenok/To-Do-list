import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import binIcon from './asset/img/binIcon.png';
// import removeListItem from './removeListItem.js';
// import { toggleIcons, toggle } from './toggleDot.js';

const toDoContainer = document.querySelector('.to-do-list--container');
const imgElement = document.createElement('img');

const renderListItem = () => {
  const toData = getLocalStorage();
  toDoContainer.innerHTML = '';

  const markUp = toData
    .map(
      (toDo) => `
  <li class="to-do-list--item-${toDo.index} to-do-list--item">
    <div>
      <div class="to-do-list-${toDo.index} to-do-list" data-toggle="${
        toDo.index
      }" >
      <div class="editable--text" contenteditable="false">
      <input type="checkbox" />
      ${toDo.description[0].toUpperCase() + toDo.description.slice(1)}
      </div>
      <div  class="dot-icon-${toDo.index} dot-icon" data-toggle="${toDo.index}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#5f5f5f"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          stroke-width="1.5"
          stroke=""
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
      <div   class="bin-icon-${toDo.index} hidden bin-icon" data-toggle="${
        toDo.index
      }">
      ${(imgElement.src = binIcon)}
      </div>
      </div> 
    </div>
      </li>
      `
    )
    .join('');
  toDoContainer.insertAdjacentHTML('afterbegin', markUp);
  const listItems = document.querySelectorAll('.editable--text');
  const dotIcon = document.querySelectorAll('.dot-icon');

  const toggle = (id, state, color) => {
    document.querySelector(`.bin-icon-${id}`)?.classList.toggle('hidden');
    document.querySelector(`.dot-icon-${id}`)?.classList.toggle('hidden');
    document.querySelector(`.to-do-list-${id}`).contentEditable = state;
    document.querySelector(`.to-do-list--item-${id}`).style.background = color;
  };

  const toggleIcons = (e) => {
    const id = e.target.closest('div').dataset.toggle;
    toggle(id, true, 'bisque');
  };
  dotIcon.forEach((btn) => btn.addEventListener('click', toggleIcons));

  listItems.forEach((item) =>
    item.addEventListener('blur', (e) => {
      const id = e.target.closest('div').dataset.toggle;
      const toData = getLocalStorage();
      const newValue = e.target.closest('div').textContent.trim().toLowerCase();
      if (toData[id]?.description !== newValue && newValue) {
        toData[id].description = newValue;
        setLocalStorage(toData);
        renderListItem();
      }
      toggle(id, false, '');
    })
  );

  // const binIcon = document.querySelectorAll('.bin-icon');
  // binIcon.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     const removeIndex = e.target.closest('div').dataset.toggle;
  //     const toData = getLocalStorage();

  //     const newData = toData.filter((item) => item.index !== +removeIndex);
  //     for (let i = 0; i < newData.length; i += 1) {
  //       newData[i].index = i;
  //     }
  //     console.log('remove', newData);
  //     setLocalStorage(newData);
  //     renderListItem();
  //     // toggleIcons(e);
  //     // removeItem(e);
  //   });
  // });
};
export default renderListItem;
