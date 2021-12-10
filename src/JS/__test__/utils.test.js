import { AssignButtons, AddTask, DeleteTask } from '../utils.js';
import virtualDom from '../__mock__/virtualDom.js';
import mockedLocalStorage from '../__mock__/virtualStorage.js';

virtualDom();

describe('AddTask Function', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockedLocalStorage,
    });
  });

  test('Add task test to virtual Dom', () => {
    // Assign
    const list = document.querySelector('.list-content');

    // Act
    AssignButtons();
    AddTask('task number 1');

    // Assert
    expect(list.children).toHaveLength(1);
  });

  test('Add task to local Storage', () => {
    // Act
    AssignButtons();
    AddTask('task number 2');
    AddTask('task number 3');

    // Assert
    expect(
      JSON.parse(window.localStorage.getItem('taskArray'))[1].description,
    ).toBe('task number 2');
  });
});

describe('Delete Task function test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockedLocalStorage,
    });
  });
  test('Remove one task from virtual Dom', () => {
    // Assign
    const list = document.querySelector('.list-content');
    // Act
    AssignButtons();
    DeleteTask(1);
    // Assert
    expect(list.children).toHaveLength(2);
  });
  test('Remove every task from virtual Dom', () => {
    // Assign
    const list = document.querySelector('.list-content');
    // Act
    AssignButtons();
    DeleteTask(1);
    DeleteTask(1);
    DeleteTask(1);
    // Assert
    expect(list.children).toHaveLength(0);
  });
  test('Remove one task from localstorage', () => {
    // Act
    AssignButtons();
    AddTask('task number 1');
    AddTask('task number 2');
    DeleteTask(0);
    // Assert
    expect(
      JSON.parse(window.localStorage.getItem('taskArray'))[0].description,
    ).toBe('task number 2');
  });
  test('Remove all tasks from localStorage', () => {
    // Act
    AssignButtons();
    AddTask('task number 1');
    AddTask('task number 2');
    DeleteTask(1);
    DeleteTask(1);
    DeleteTask(1);
    // Assert
    expect(JSON.parse(window.localStorage.getItem('taskArray'))).toHaveLength(
      0,
    );
  });
});
