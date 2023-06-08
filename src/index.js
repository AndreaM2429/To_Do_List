import './style.css';
import Taks from './Modules/main_class.js';

Taks.init();

/* import points from './select.png';
import arrow from './arrow.png';
import refresh from './refresh.png';
import addTask from './add_task.js';

let tasks = [
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

const name = 'ListTasks';
// const div = document.getElementById('container');

const listTask = () => {
  const ul = document.createElement('ul');

  tasks.forEach((elem) => {
    const task = document.createElement('li');
    task.className = 'flexrow pading';
    if (elem.completed === true) {
      task.innerHTML = `
      <input type="checkbox" checked class="${elem.index}"><label class="flexrow">
      ${elem.description}</label><img src="${points}" alt="select" class="imgselect img">
      `;
    } else {
      task.innerHTML = `
    <input type="checkbox" class="${elem.index}"><label class="flexrow">
    ${elem.description}</label><img src="${points}" alt="select" class="imgselect img">
      `;
    }
    ul.appendChild(task);
  });
  return ul;
};

const tableTask = () => {
  const divlist = document.createElement('div');
  divlist.className = 'conteiner';

  const title = document.getElementById('containertitle');
  const titleimg = document.createElement('img');
  titleimg.src = refresh;
  titleimg.className = 'img';
  title.appendChild(titleimg);

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

// div.appendChild(tableTask());

const save = () => {
  localStorage.setItem(name, JSON.stringify(tasks));
};

const load = () => {
  const localstorageTasks = localStorage.getItem(name);
  if (localStorage) {
    tasks = JSON.parse(localstorageTasks);
    tableTask(); // display
  }
};

addTask(tasks, save, load);
*/