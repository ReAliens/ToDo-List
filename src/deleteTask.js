import { UpdateIndexes, DisplayTask } from './add-remove.js';

let taskArray = [];
let indexToAssign = taskArray.length;

function DeleteTask(indexToDelete) {
  taskArray = taskArray.filter((task) => task.index !== indexToDelete);
  indexToAssign -= 1;
  UpdateIndexes();
  DisplayTask(taskArray);
}

function DeleteAllCompletedTasks(taskArray) {
  if (localStorage.getItem('taskArray')) {
    taskArray = JSON.parse(localStorage.getItem('taskArray'));
  }
  // eslint-disable-next-line
    const filteredArray = taskArray.filter((task) => task.completed != true);
  UpdateIndexes();
  DisplayTask(filteredArray);
  localStorage.setItem('taskArray', JSON.stringify(filteredArray));
  return filteredArray;
}

export default { DeleteTask, DeleteAllCompletedTasks };