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
}

export default Store;
