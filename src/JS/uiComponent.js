import defaultTasks from './data.js';
import enterButton from '../images/enter.png';

class UI {
  static addTask(task) {
    const tasksContainer = document.querySelector('.tasks');
    const taskholder = `<div data-id=${task.index} class="task-holder">
    <input type="checkbox" id=${task.index} name=${task.index} ${
  task.done && 'checked'
} />
    <label for=${task.index}>${task.description}</label>
    <button>
    <img src= ${task.icon} alt='icon'/>
    </button>
  </div>`;

    return tasksContainer.insertAdjacentHTML('beforeend', taskholder);
  }

  static addbutton() {
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

  static showTask() {
    defaultTasks.map((item) => UI.addTask(item));
  }
}

export default UI;
