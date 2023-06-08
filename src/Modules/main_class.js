import trash from '../trash.png';
import addTask from './add_task.js';
import removeTask from './remove_task.js';
import editTask from './edit_task.js';
import markComplete, { deleteComplete } from './complete_task.js';

const add = addTask;
const removeone = removeTask;
const editone = editTask;
const complete = markComplete;
const dropComplete = deleteComplete;

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
    this.tableTask();
  }

  tableTask = () => {
    const div = document.querySelector('.contain--tasks');
    const buttondrop = document.querySelector('.drop');

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

      if (elem.completed === false) {
        inputTask.checked = false;
      } else {
        inputTask.checked = true;
      }

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
      });
      inputTask.addEventListener('change', () => {
        this.completeTask(index);
      });
    });

    div.appendChild(ul);
    buttondrop.addEventListener('click', () => {
      this.dropTaskComplete(this.saveTask, this.loadTasks);
    });
  }

  deleteTask = (index) => {
    removeone(this.tasks, index, this.saveTask, this.loadTasks);
    this.tableTask();
  }

  dropTaskComplete = (save, load) => {
    const updateTask = dropComplete(this.tasks);
    this.tasks = updateTask;
    save();
    load();
    this.tableTask();
  }

  completeTask = (index) => {
    complete(this.tasks, index, this.saveTask, this.loadTasks);
  }

  loadTasks = () => {
    const localstorageTasks = localStorage.getItem(this.name);
    if (localstorageTasks) {
      this.tasks = JSON.parse(localstorageTasks);
    }
  }

  saveTask = () => {
    localStorage.setItem(this.name, JSON.stringify(this.tasks));
  }
}
