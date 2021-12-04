import './style.css';
import Store from './JS/store.js';
import UIComponent from './JS/ui.js';
import Task from './JS/class.js';
import enterButton from './images/enter.png';

const taskDesc = document.getElementById('task');
const clearButton = document.getElementById('clear');

function addbutton() {
  const newICon = new Image();
  newICon.src = enterButton;
  const inputContainer = document.querySelector('.input-container');
  const submitButton = document.createElement('button');
  const enterImage = document.createElement('img');
  enterImage.src = enterButton;
  enterImage.style.width = '25px';
  enterImage.style.height = '25px';
  submitButton.append(enterImage);
  inputContainer.appendChild(submitButton);
}
addbutton();

document.querySelector('#formContainer').addEventListener('submit', (e) => {
  e.preventDefault();
  const allTaskes = Store.getTasks();
  if (taskDesc.value === '') {
    UIComponent.clearInputs();
  } else {
    const task = new Task(allTaskes.length, taskDesc.value, false);

    UIComponent.showTaskUi(task);
    Store.addTask(task);
    UIComponent.clearInputs();
  }
});

document.addEventListener('DOMContentLoaded', UIComponent.showTasks);

clearButton.addEventListener('click', () => {
  UIComponent.deleteCompTasks();
  Store.deleteCompTasks();
});

document.querySelector('.tasks').addEventListener('click', (e) => {
  UIComponent.delTask(e.target);
  Store.deleteTask(e.target.id);
});
