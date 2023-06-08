import './style.css';
import List from './list.js';

const todoList = new List();
todoList.display();
document.querySelector('#add-task').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todoList.addActivity(activity);
  e.target.reset();
});

document.querySelector('.clear-completed').addEventListener('click', () => {
  todoList.clearCompleted();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todoList.clearAll();
});