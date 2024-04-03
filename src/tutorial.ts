// /* -------------------------------------------------------------------------- */
// SECTION -
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// SECTION - Type Guards - Typeof
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 234.3454545 : true;

const checkValue = (value: ValueType): void => {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
    return;
  }

  if (typeof value === 'number') {
    console.log(value.toFixed(2));
    return;
  }

  if (typeof value === 'boolean') {
    console.log(`boolean: ${value}`);
    return;
  }
};

checkValue(value);
checkValue('miranda');
checkValue(334);
checkValue(false);

/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// SECTION - Modules
// NOTE - If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope.
// NOTE - In this case, declaring the same variable in two different files would cause a conflict.

// import newStudent, { person, sayHello, type Student } from './actions';

// sayHello('Typescript');
// sayHello(person);

// const anotherStudent: Student = {
//   name: 'Bob',
//   age: 28,
// };
// console.log(anotherStudent);

/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// SECTION - Type - Never
// NOTE - In TypeScript, never is a type that represents the type of values that never occur.you can't assign any value to a variable of type never.
// let someValue: never = 0;

// NOTE - TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

// type Theme = 'light' | 'dark';

// const checkTheme = (theme: Theme): void => {
//   if (theme == 'light') {
//     console.log('light theme');
//     return;
//   }
//   if (theme == 'dark') {
//     console.log('dark theme');
//     return;
//   }
//   //   theme // NOTE - (parameter) theme: never
// };

// checkTheme('light');

// enum Color {
//   Red,
//   Blue,
//   Green,
// }

// const getColorName = (colorName: Color) => {
//   switch (colorName) {
//     case Color.Red:
//       return 'Red';

//     case Color.Blue:
//       return 'Blue';

//     case Color.Green:
//       return 'Green';

//     default:
//       // at build time
//       let unexpectedColor: never = colorName;
//       // at runtime
//       throw new Error(`Unexpected color value: ${colorName}`);
//   }
// };
// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// SECTION - Type - UnknownType Assertion
// NOTE - The unknown type in TypeScript is a type-safe counterpart of the any type.
// NOTE - It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.
// let unKnownValue: unknown;
// unKnownValue = 'hello world';
// unKnownValue = [1, 2, 3, 4];
// unKnownValue = 43.4355675756;

// if (typeof unKnownValue === 'string') {
//   console.log('string', unKnownValue);
// }

// if (typeof unKnownValue === 'number') {
//   let newVal = Number(unKnownValue.toFixed(2));
//   console.log('number', newVal);
// }

// if (Array.isArray(unKnownValue)) {
//   unKnownValue?.forEach((item: number) => console.log('array item', item));
// }

// const runSomeCode = () => {
//   const random = Math.random();
//   if (random < 0.5) {
//     throw new Error('there was an error on random num...');
//   } else {
//     throw 'some error';
//   }
// };

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//   }
// }
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
//SECTION - Type Assertion
// let someValue: any = 'Some Value string';
// let strLength: number = (someValue as string).length; // NOTE -  We use type assertion when we know more about type than the typescript.
// console.log('strLength', strLength);

// type Bird = {
//   name: string;
// };

// let birdString = '{"name":"Eagle"}';
// let dogString = '{"breed":"Poodle"}';

// let birdObj = JSON.parse(birdString);
// let dogObj = JSON.parse(dogString);

// let bird = birdObj as Bird;
// let dog = dogObj as Bird;

// console.log('bird', bird);
// console.log('dog', dog);

// //----
// enum Status {
//   Pending = 'pending',
//   Declined = 'declined',
// }

// type User = {
//   name: string;
//   status: Status;
// };

// save Status.Pending in the DB as a string
// retrieve string from the DB
// const statusValue = 'pending';
// const user: User = { name: 'Neo', status: statusValue as Status };

// console.log('user', user);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
//SECTION - Challenge - Tuple and Enum

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// const createUser = (user: User): User => {
//   return user;
// };

// const user: User = createUser({
//   id: 1,
//   name: 'John',
//   role: UserRole.Admin,
//   contact: ['ggg@gmail.com', '0555-555-55-55'],
// });
// console.log('user', user);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
//SECTION - Enum / Reverse Mapping
// NOTE - Enums in TypeScript allow you to define a set of named constants.

// enum Days {
//   Monday = 1,
//   Tuesday = 2,
//   Wednesday = 3,
//   Thursday = 4,
//   Friday = 5,
//   Saturday = 6,
//   Sunday = 7,
// }

// console.log(Days);
// Object.values(Days).forEach((val) => {
//   if (typeof val === 'number') {
//     console.log(val);
//   }
// });
// console.log('Turn days values into an array', Object.values(Days));
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// //SECTION - Enum
// enum ServerResponseStatus {
//   Success,
//   Error,
// }
// console.log(ServerResponseStatus);

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// const getServerResponse = (): ServerResponse => {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ['first item', 'second item'],
//   };
// };
// const response: ServerResponse = getServerResponse();
// console.log(response);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// //SECTION - Tuple
// Used for fixed length, fixed type ordered arrays
// Order and length should match
// Readonly is needed, but with readonly, optional parameter can not be used.
// let person: [string, number] = ['simon', 36];
// let date: readonly [number, number, number, number] = [23, 5345, 65768, 7876];

// const getPerson = (): [string, number] => {
//   return ['apple', 6];
// };
// console.log(getPerson());
// console.log(getPerson()[0]);
// console.log(getPerson()[1]);

// // We can use optional parameter
// let adam: [string, number?] = ['Eve'];
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// NOTE - Type alias can also be used with primitive and literal type too.
// NOTE - We can use intersection types (&) to add additional properties with type alias.
// NOTE - Computed properties can only be done with type alias.
// NOTE - Interface can merge, reopen and extend types. Wo can't do it with type alias.
// //SECTION - Interface - Fundamentals
// interface BookType {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: BookType = {
//   isbn: 123,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   // genre: 'self-help', // Since genre is optional we can use it or not
//   printAuthor() {
//     console.log('deepWork author', this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };

// deepWork.printAuthor();
// console.log(deepWork.printTitle('is nice book.'));
// // deepWork.isbn = 'bum' //  Cannot assign to 'isbn' because it is a read-only property.ts(2540)

// // Challenge - Interface I
// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(increase: number): number;
// }

// const pcLaptop: Computer = {
//   id: 2,
//   brand: 'Dell',
//   ram: 8,
//   upgradeRam(increase) {
//     this.ram += increase;
//     return this.ram;
//   },
// };

// console.log(pcLaptop.upgradeRam(8));
// pcLaptop.storage = 256;
// console.log(pcLaptop);

// //  Interface - Merge and Extend
// interface Person {
//   name: string;
//   getDetails(): string;
// }
// // NOTE - Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.
// interface Person {
//   age: number;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// const person: Person = {
//   name: 'John',
//   age: 38,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// console.log(person.getDetails());

// // NOTE -  Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface.
// // NOTE -  You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// interface EmployeeNew extends Person {
//   employeeId: number;
// }

// const worker: EmployeeNew = {
//   employeeId: 4335344,
//   name: 'Mike',
//   age: 42,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };

// console.log(worker.getDetails());

// interface ManagerNew extends Person, DogOwner {
//   managePeople(): void;
// }

// const newManager: ManagerNew = {
//   name: 'Bob',
//   age: 34,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   dogName: 'Rex',
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log('Managing people...');
//   },
// };

// console.log(newManager.getDetails());
// console.log(newManager.getDogDetails());
// console.log(newManager.managePeople());

// // Challenge - Interface II
// interface Member {
//   name: string;
// }

// interface PetOwner extends Member {
//   dogName: string;
// }

// interface Director extends Member {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// function getMember(): Member | PetOwner | Director {
//   let randomNumber = Math.random() * 1;

//   if (randomNumber < 0.33) {
//     return {
//       name: 'Susan',
//     };
//   } else if (randomNumber > 0.33 && randomNumber < 0.66) {
//     return {
//       name: 'Clarke',
//       dogName: 'Boxer',
//     };
//   } else {
//     return {
//       name: 'John',
//       managePeople: () => console.log('Managing people...'),
//       delegateTasks: () => console.log('Delegating tasks...'),
//     };
//   }
// }

// const user: Member | PetOwner | Director = getMember();
// console.log('user', user);

// //--- Interface - Type Predicate
// // function isUser(obj: Member | PetOwner | Director): boolean {
// //   return 'managePeople' in obj;
// // }
// // console.log(isUser(user));
// // Or
// function isUser(obj: Member | PetOwner | Director): obj is Director {
//   return 'managePeople' in obj;
// }
// if (isUser(user)) {
//   console.log('is user', user.delegateTasks());
// }
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Intersection Type
// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number }; // Or we can assign a new type for Intersection Type

// const book1: Book = { id: 1, name: 'How to cook a dragon', price: 26 };
// const book2: Book = { id: 2, name: 'Secret life of unicorns', price: 29 };
// const discountedBook: Book & { discount: number } = {
//   // use Intersection Type with & to add more types
//   id: 6,
//   name: 'Goblins vs Gnomes: The Ultimate Guide',
//   price: 23,
//   discount: 0.15,
// };
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Functions

// const sayHi = (name: string) => {
//   console.log(`Hello ${name}, welcome to typescript!`);
// };
// // sayHi(8); // NOTE - Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// sayHi('Serhat');

// // Function Returns
// const calculateDiscount = (price: number): number => {
//   // Return value type
//   return price * 0.9;
// };
// const finalPrice = calculateDiscount(200);
// console.log(finalPrice);

// //---
// const addThree = (num: number): number => {
//   let anotherNumber: number = 3;
//   return num + anotherNumber;
// };
// const result = addThree(3);
// const someValue = result;
// console.log(result);

// //--- Challenge
// const names: string[] = ['Serhat', 'Toprak', 'Züleyha', 'Melike', 'Bahar'];
// const isNameAvailable = (name: string): boolean => {
//   return names.includes(name);
// };
// const nameToCheck: string = 'Melike';
// if (isNameAvailable(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list.`);
// } else {
//   console.log(`${nameToCheck} is not in the list.`);
// }

// // Optional Parameters
// const calculatePrice = (price: number, discount?: number): number => {
//   return price - (discount || 0); //NOTE - 'discount' is possibly 'undefined'. So wee need to give a fallback value like 0 in the example
// };

// let priceAfterDiscount = calculatePrice(100, 20);
// console.log(priceAfterDiscount);

// // Default Parameters
// const calculateScore = (
//   initialScore: number,
//   penaltyPoints: number = 0
// ): number => {
//   return initialScore - penaltyPoints;
// };

// let scoreAfterPenalty = calculateScore(100, 20);
// let scoreWithoutPenalty = calculateScore(200);
// console.log('scoreAfterPenalty', scoreAfterPenalty);
// console.log('scoreWithoutPenalty', scoreWithoutPenalty);

// // Rest Parameter
// const sum = (message: string, ...numbers: number[]): string => {
//   let total = numbers.reduce((prev, current) => {
//     return prev + current;
//   }, 0);

//   return `${message} ${total}.`;
// };

// let sumResult = sum('The total is : ', 1, 2, 3, 4, 5, 6);
// console.log(sumResult);

// // Void Keyword
// const logMessage = (message: string) => {
//   console.log(message);
// };
// logMessage('Hello, Typescript'); // const logMessage: (message: string) => void // NOTE - Void indicates that function does not return a value

// // Challenge - ype Guards
// const processInput = (val: string | number) => {
//   if (typeof val === 'number') {
//     console.log('Multiply number by 2:', val * 2);
//   } else if (typeof val === 'string') {
//     console.log('String to uppercase:', val.toUpperCase());
//   }
// };
// processInput('cat meows a lot');
// processInput(21);
// processInput('Dog barks a lot');
// processInput(42);

// // Objects As Parameters
// const createEmployee = ({
//   id,
// }: {
//   id: number;
// }): { id: number; isActive: boolean } => {
//   return {
//     id,
//     isActive: id % 2 === 0,
//   };
// };
// const employee = createEmployee({ id: 6 });
// const employee2 = createEmployee({ id: 9 });
// console.log(employee, employee2);

// // Challenge
// const processData = (
//   input: number | string,
//   config: { reverse: boolean } = { reverse: false }
// ): number | string => {
//   if (typeof input === 'number') {
//     return input * input;
//   } else {
//     return config.reverse
//       ? input.split('').reverse().join('')
//       : input.toUpperCase();
//   }
// };

// console.log(processData(10));
// console.log(processData('Hello World'));
// console.log(processData('Hello World', { reverse: true }));

// // Type Alias

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

// const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// createUser(john);
// createUser(susan);
// createUser({ id: 6, name: 'Serhat', isActive: true });

// // Challenge
// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// type Manager = {
//   id: number;
//   name: string;
//   employees: Employee[];
// };

// type Stuff = Manager | Employee;

// const alice: Employee = {
//   id: 6,
//   name: 'Alice',
//   department: 'Frontend Development',
// };
// const steve: Employee = {
//   id: 9,
//   name: 'Steve',
//   department: 'UX Design',
// };
// const bob: Manager = {
//   id: 3,
//   name: 'Bob',
//   employees: [alice, steve],
// };

// const printStuffDetails = (stuff: Stuff): void => {
//   if ('employees' in stuff) {
//     console.log(
//       `${stuff.name} is a manager and has ${stuff.employees.length} employees.`
//     );
//   } else {
//     console.log(
//       `${stuff.name} is an employee and in ${stuff.department} department.`
//     );
//   }
// };

// printStuffDetails(bob);
// printStuffDetails(alice);
// printStuffDetails(steve);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Objects

// let book = { title: 'book', cost: 20 };
// let pen = { title: 'pen', cost: 18 };
// let notebook = { title: 'notebook' };

// // let items: { title: string; cost: number }[] = [book, pen, notebook]; //NOTE - Property 'cost' is missing in type '{ title: string; }' but required in type '{ title: string; cost: number; }'.ts(2741)
// let deskItems: { title: string; cost?: number }[] = [book, pen, notebook];
// console.log(deskItems);

// let bike: { brand: string; year: number } = { brand: 'climax', year: 2014 };
// // bike.year = '2014' //NOTE - Type 'string' is not assignable to type 'number'.
// let laptop: { brand: string; year: number } = { brand: 'MSI', year: 2024 };
// // let laptop2: {brand:string; year:number} = {brand:'MAC'}  // Property 'year' is missing in type '{ brand: string; }' but required in type '{ brand: string; year: number; }'.ts(2741)
// let products: { title: string; price?: number }[] = [
//   { title: 'phone', price: 44 },
//   { title: 'tv' },
// ];
// console.log(products);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Arrays
// let temperatures: number[] = [20, 18, 41];
// temperatures.push(38);
// // temperatures.push('36'); // NOTE -Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(temperatures);

// let colors: string[] = ['yellow', 'blue', 'red'];
// // colors.push(20); // NOTE - Argument of type 'number' is not assignable to parameter of type 'string'.
// colors.push('green');
// console.log(colors);

// let mixedArray: (string | number)[] = ['apple', 6, 'banana', 8];
// // mixedArray.push(true); // NOTE - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// mixedArray.push('cat');
// console.log(mixedArray);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Challenge - Union Type
// let orderStatus: 'shipped' | 'delivered' | 'processing' = 'processing';
// orderStatus = 'delivered';
// orderStatus = 'shipped';
// // orderStatus = 'cancelled'; // Type '"cancelled"' is not assignable to type '"shipped" | "delivered" | "processing"'.

// let discount: string | number = 20;
// discount = '20%';
// // discount = true; // Type 'boolean' is not assignable to type 'string | number'.

// console.log('union type 🩷🩷🩷', orderStatus, discount);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Example
// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

// let foundBook: string | undefined;

// for (const book of books) {
//   if (book === '1984') {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }

// console.log('foundBook 🩷🩷🩷', foundBook);
// console.log('foundBook 🩷🩷🩷', foundBook?.length);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// // SECTION - Type : Any

// let notSure: any = 4;

// notSure = (name: string) => {
//   return name;
// };

// console.log(notSure('Bedirhan'));
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */
// //SECTION - Union Type

// let tax: number | string = 20;
// tax = '6';

// console.log(tax);
// let requestStatus: 'pending' | 'error' | 'success' = 'pending';

// requestStatus = 'error';
// requestStatus = 'success';
// // requestStatus = 'random';  // Type '"random"' is not assignable to type '"pending" | "error" | "success"'.

// console.log(requestStatus);
/* -------------------------------------------------------------------------- */

// /* -------------------------------------------------------------------------- */

// //SECTION - Type Annotations

// let animal: string = 'Cat';
// animal.concat(', loves milk.');

// let water: boolean = true;
// water.valueOf();

// let num: number = 6;
// num.toExponential();

// console.log(animal);
// console.log(water);
// console.log(num);
/* -------------------------------------------------------------------------- */
