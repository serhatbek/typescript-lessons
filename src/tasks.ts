const taskInput = document.querySelector<HTMLInputElement>('.form-input');
const taskForm = document.querySelector<HTMLFormElement>('.form');
const tasksListContainer = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const loadTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  //   console.log(tasks);
  return tasks ? JSON.parse(tasks) : [];
};

const tasks: Task[] = loadTasks();

// render tasks

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
    updateLocalStorage();
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

tasks.forEach((task) => renderTask(task));

const updateLocalStorage = (): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
