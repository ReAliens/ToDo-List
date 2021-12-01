import editButton from '../images/dots.png';

const myIcon = new Image();
myIcon.src = editButton;

const defaultTasks = [
  {
    index: 1,
    done: false,
    description: 'wash the car',
    icon: editButton,
  },
  {
    index: 2,
    done: true,
    description: 'wash dishes',
    icon: editButton,
  },
  {
    index: 3,
    done: false,
    description: 'make a dinner',
    icon: editButton,
  },
];

export default defaultTasks;
