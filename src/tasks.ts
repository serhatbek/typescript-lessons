const addTaskBtn = document.querySelector<HTMLButtonElement>('.btn');
const taskInput = document.querySelector<HTMLInputElement>('.form-input');
const taskForm = document.querySelector<HTMLFormElement>('.form');
const tasksListContainer = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];
