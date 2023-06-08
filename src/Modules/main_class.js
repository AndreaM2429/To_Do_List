import trash from '../trash.png';
import addTask from './add_task.js';
import removeTask from './remove_task.js';
import editTask from './edit_task.js';

const add = addTask;
const removeone = removeTask;
const editone = editTask;

export default class Taks {
  static init() {
    const newList = new Taks();
    return newList;
  }

  constructor() {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.addNewTasks();
    });

    this.tasks = [];
    this.name = 'ListTasks';
    this.loadTasks();
    this.tableTask();
  }

  addNewTasks = () => {
    add(this.tasks, this.saveTask, this.loadTasks);
  }

  tableTask = () => {
    const div = document.querySelector('.contain--tasks');

    const ul = document.createElement('ul');
    div.innerHTML = '';
    this.tasks.forEach((elem, index) => {
      const taskli = document.createElement('li');
      taskli.className = 'flexrow pading';
      const inputTask = document.createElement('input');
      inputTask.type = 'checkbox';
      const labelTask = document.createElement('input');
      labelTask.className = 'flexrow text taskdesc';
      labelTask.value = elem.description;
      const imgtrash = document.createElement('img');
      imgtrash.src = trash;
      imgtrash.alt = 'delete';
      imgtrash.className = 'trash';
      taskli.appendChild(inputTask);
      taskli.appendChild(labelTask);
      taskli.appendChild(imgtrash);

      ul.appendChild(taskli);
      imgtrash.addEventListener('click', () => {
        this.deleteTask(index);
      });
      labelTask.addEventListener('focus', () => {
        taskli.style.backgroundColor = 'bisque';
      });
      labelTask.addEventListener('focusout', () => {
        taskli.style.backgroundColor = 'rgb(255, 243, 227)';
        editone(this.tasks, index, labelTask.value, this.saveTask);
        console.log('Tasks edits', this.tasks);
      });
    });

    div.appendChild(ul);

    // div.appendChild(buttonClear);
  }

  deleteTask = (index) => {
    removeone(this.tasks, index, this.saveTask, this.loadTasks);
  }

  loadTasks = () => {
    const localstorageTasks = localStorage.getItem(this.name);
    if (localstorageTasks) {
      this.tasks = JSON.parse(localstorageTasks);
      console.log('loadTaks', this.tasks);
      this.tableTask(); // display
    }
  }

  saveTask = () => {
    localStorage.setItem(this.name, JSON.stringify(this.tasks));
    console.log('Storage', localStorage);
  }
}
