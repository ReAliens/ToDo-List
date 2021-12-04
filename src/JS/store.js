import Task from './class.js';

class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('taskList') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('taskList'));
    }
    return tasks;
  }

  static addTask(task) {
    const allTasks = Store.getTasks();
    allTasks.push(task);
    localStorage.setItem('taskList', JSON.stringify(allTasks));
  }

  static updateCompeleted(e) {
    const taskID = e.target.id;
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      if (task.index === Number(taskID)) task.done = !task.done;
      localStorage.setItem('taskList', JSON.stringify(tasks));
    });
  }

  static deleteCompTasks() {
    const allTasks = Store.getTasks();
    const newTasks = allTasks.filter((task) => task.done === false);
    newTasks.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('taskList', JSON.stringify(newTasks));
  }

  static updateDesc(e) {
    const oldTasks = Store.getTasks();
    const newTask = new Task();
    const taskIndex = e.target.parentElement.id;
    const taskDescEle = e.target.value;
    oldTasks.forEach((task, i) => {
      if (task.index === Number(taskIndex)) {
        newTask.desc = taskDescEle;
        newTask.index = task.index;
        newTask.done = false;
        oldTasks.splice(i, 1, newTask);
      }
    });
    localStorage.setItem('taskList', JSON.stringify(oldTasks));
  }

  static deleteTask(taskID) {
    const tasks = Store.getTasks();
    const newTasks = tasks.filter((task) => task.index !== Number(taskID));
    newTasks.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('taskList', JSON.stringify(newTasks));
  }
}

export default Store;
