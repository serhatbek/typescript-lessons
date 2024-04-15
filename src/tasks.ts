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
    const task: Task = {
      description: taskValue,
      isCompleted: false,
    };
    // add task to list
    addTask(task);
    // render tasks
    renderTask(task);
    // update local storage

    // if value clean everything and return
    taskInput.value = '';
    return;
  }
  alert('Please add a task description');
});

const addTask = (task: Task): void => {
  tasks.push(task);
};

const renderTask = (task: Task): void => {
  const taskItem = document.createElement('li');
  taskItem.textContent = task.description;
  tasksListContainer?.appendChild(taskItem);
};
