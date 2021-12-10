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

  test('Add task test', () => {
    // Assign
    const list = document.querySelector('.list-content');

    // Act
    AssignButtons();
    AddTask('task number 1');

    // Assert
    expect(list.children).toHaveLength(1);
  });
});

describe('DeleteTask function', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockedLocalStorage,
    });
  });
  test('Remove one task and check on the list DOM', () => {
    // Assign
    const list = document.querySelector('.list-content');
    // Act
    AssignButtons();
    DeleteTask(1);
    // Assert
    expect(list.children).toHaveLength(2);
  });
  test('Remove every task one by one and check on the list DOM', () => {
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
  test('Remove one task and check on the localStorage', () => {
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
  test('Remove all tasks and check on the localStorage', () => {
    // Act
    AssignButtons();
    AddTask('task number 1');
    AddTask('task number 2');
    DeleteTask(1);
    DeleteTask(1);
    DeleteTask(1);
    // Assert
    expect(JSON.parse(window.localStorage.getItem('taskArray'))).toHaveLength(0);
  });
});
