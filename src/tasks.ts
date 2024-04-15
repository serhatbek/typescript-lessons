const addTaskBtn = document.querySelector<HTMLButtonElement>('.btn');
const taskInput = document.querySelector<HTMLInputElement>('.form-input');
const taskForm = document.querySelector<HTMLFormElement>('.form');
const tasksListContainer = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

// if no value alert

// listen to submit event
taskForm?.addEventListener('submit', (event) => {
  // prevent default
  event.preventDefault();
  // get input value
  let taskValue = taskInput?.value;
  if (taskValue) {
    console.log(taskValue);
    // if value clean everything and return
    taskInput.value = '';
    return;
  }
  alert('Please add a task description');
});
