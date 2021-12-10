/**
 * @jest-environment jsdom
 */

import { AssignButtons, AddTask } from '../utils.js';
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
