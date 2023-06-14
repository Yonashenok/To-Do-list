import './style/index.css';

const toDoContainer = document.querySelector('.to-do-list--container');
const toData = [
  {
    description: 'Adding a new item',
    completed: false,
    index: 1,
  },
  {
    description: 'Adding a new item',
    completed: false,
    index: 2,
  },
  {
    description: 'Adding a new item',
    completed: false,
    index: 3,
  },
  {
    description: 'Adding a new item',
    completed: false,
    index: 4,
  },
  {
    description: 'Adding a new item',
    completed: false,
    index: 5,
  },
  {
    description: 'Adding a new item',
    completed: false,
    index: 6,
  },
];

const renderToDoList = () => {
  const markUp = toData
    .map((toDo) => `
      <li class="to-do-list--item">
            <div class="to-do-list">
              <input type="checkbox" />
              <p>${toDo.description} ${toDo.index}</p>
            </div>
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
          </li>
      `)
    .join('');
  toDoContainer.insertAdjacentHTML('afterbegin', markUp);
};

renderToDoList();
