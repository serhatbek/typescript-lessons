export const sayHello = (name: string): void => {
  console.log(`Hello ${name}`);
};

export let person = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: 'peter',
  age: 34,
};

export default newStudent;
