import './style.css';
import points from './select.png';
import arrow from './arrow.png';
import refresh from './refresh.png';

const tasks = [
  {
    description: 'Set up HTML, CSS and JS linters',
    completed: true,
    index: 0,
  },
  {
    description: 'Set up Webpack',
    completed: true,
    index: 1,
  },
  {
    description: 'Add remove/add functions',
    completed: false,
    index: 2,
  },
  {
    description: 'Finish the "To Do List" project',
    completed: false,
    index: 3,
  },
];

const div = document.getElementById('container');
const listTask = () => {
  const ul = document.createElement('ul');

  tasks.forEach((elem) => {
    const task = document.createElement('li');
    task.className = 'flexrow pading';
    if (elem.completed === true) {
      task.innerHTML = `
      <input type="checkbox" checked class="${elem.index}"><label class="flexrow">${elem.description}</label><img src="${points}" alt="select" class="imgselect img">
      `;
    } else {
      task.innerHTML = `
    <input type="checkbox" class="${elem.index}"><label class="flexrow">${elem.description}</label><img src="${points}" alt="select" class="imgselect img">
      `;
    }
    ul.appendChild(task);
  });
  return ul;
};

const tableTask = () => {
  const divlist = document.createElement('div');
  divlist.className = 'conteiner';

  const title = document.createElement('div');
  title.className = 'flexrow pading';
  title.innerHTML = `
    <h1>Today's To Do</h1> <img src="${refresh}" alt="refresh" class="img">
  `;

  const addinput = document.createElement('input');
  addinput.placeholder = 'Add to your list...';
  addinput.className = 'text';

  const divNewTask = document.createElement('div');
  divNewTask.className = 'flexrow pading';
  const imgadd = document.createElement('img');
  imgadd.src = arrow;
  imgadd.className = 'img';
  divNewTask.appendChild(addinput);
  divNewTask.appendChild(imgadd);

  const buttonClear = document.createElement('button');
  buttonClear.textContent = 'Clear all completed';

  divlist.appendChild(title);
  divlist.appendChild(divNewTask);
  divlist.appendChild(listTask());
  divlist.appendChild(buttonClear);
  return divlist;
};

div.appendChild(tableTask());
