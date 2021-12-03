import Store from './store.js';

const taskDesc = document.getElementById('task');

class UIComponent {
  static showTaskUi(task) {
    const tasksContainer = document.querySelector('.tasks');
    const taskHolder = document.createElement('div');
    const input = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const icon = document.createElement('i');
    taskHolder.className = 'task-holder';
    taskHolder.id = task.index;
    input.type = 'checkbox';
    input.className = 'checkbox';
    input.id = task.index;
    input.name = task.index;
    input.addEventListener('change', Store.updateCompeleted);
    input.checked = task.done ? 'checked' : '';
    descriptionLabel.innerHTML = task.desc;
    icon.className = 'fas fa-ellipsis-v';
    taskHolder.append(input, descriptionLabel, icon);
    tasksContainer.appendChild(taskHolder);
  }

  static showTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => UIComponent.showTaskUi(task));
  }

  static clearInputs() {
    taskDesc.value = '';
  }
}

export default UIComponent;
