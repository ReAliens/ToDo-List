import Store from './store.js';

const taskDesc = document.getElementById('task');

class UIComponent {
  static showTaskUi(task) {
    const tasksContainer = document.querySelector('.tasks');
    const taskHolder = document.createElement('div');
    const input = document.createElement('input');
    const descriptionLabel = document.createElement('input');
    const icon = document.createElement('i');
    taskHolder.className = 'task-holder';
    taskHolder.id = task.index;
    input.type = 'checkbox';
    input.className = 'checkbox';
    input.id = task.index;
    input.name = task.index;
    input.addEventListener('change', Store.updateCompeleted);
    input.checked = task.done ? 'checked' : '';
    descriptionLabel.value = task.desc;
    descriptionLabel.maxLength = '30';
    descriptionLabel.id = 'userUpdate';
    icon.className = 'fa fa-trash del';
    icon.id = task.index;
    icon.style.cursor = 'pointer';
    descriptionLabel.addEventListener('change', Store.updateDesc);
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

  static deleteCompTasks() {
    const allTasks = document.querySelectorAll('.checkbox');
    allTasks.forEach((task) => {
      if (task.checked) {
        const compTask = task.parentElement;
        compTask.remove();
      }
    });
  }

  static delTask(task) {
    if (task.classList.contains('del')) {
      task.parentElement.remove();
    }
  }
}

export default UIComponent;
