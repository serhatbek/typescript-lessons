/* -------------------------------------------------------------------------- */
//SECTION -  Interface - Fundamentals
interface BookType {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: BookType = {
  isbn: 123,
  title: 'Deep Work',
  author: 'Cal Newport',
  // genre: 'self-help', // Since genre is optional we can use it or not
  printAuthor() {
    console.log('deepWork author', this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWork.printAuthor();
console.log(deepWork.printTitle('is nice book.'));
// deepWork.isbn = 'fgfg' //  Cannot assign to 'isbn' because it is a read-only property.ts(2540)

// Challenge - Interface I
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(increase: number): number;
}

const pcLaptop: Computer = {
  id: 2,
  brand: 'Dell',
  ram: 8,
  upgradeRam(increase) {
    this.ram += increase;
    return this.ram;
  },
};

console.log(pcLaptop.upgradeRam(8));
pcLaptop.storage = 256;
console.log(pcLaptop);
/* -------------------------------------------------------------------------- */
// SECTION - Intersection Type
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number }; // Or we can assign a new type for Intersection Type

const book1: Book = { id: 1, name: 'How to cook a dragon', price: 26 };
const book2: Book = { id: 2, name: 'Secret life of unicorns', price: 29 };
const discountedBook: Book & { discount: number } = {
  // use Intersection Type with & to add more types
  id: 6,
  name: 'Goblins vs Gnomes: The Ultimate Guide',
  price: 23,
  discount: 0.15,
};

/* -------------------------------------------------------------------------- */
// SECTION - Functions

const sayHi = (name: string) => {
  console.log(`Hello ${name}, welcome to typescript!`);
};
// sayHi(8); //NOTE - Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
sayHi('Serhat');

// Function Returns
const calculateDiscount = (price: number): number => {
  // Return value type
  return price * 0.9;
};
const finalPrice = calculateDiscount(200);
console.log(finalPrice);

//---
const addThree = (num: number): number => {
  let anotherNumber: number = 3;
  return num + anotherNumber;
};
const result = addThree(3);
const someValue = result;
console.log(result);

//--- Challenge
const names: string[] = ['Serhat', 'Toprak', 'Züleyha', 'Melike', 'Bahar'];
const isNameAvailable = (name: string): boolean => {
  return names.includes(name);
};
const nameToCheck: string = 'Melike';
if (isNameAvailable(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}

// Optional Parameters
const calculatePrice = (price: number, discount?: number): number => {
  return price - (discount || 0); //NOTE - 'discount' is possibly 'undefined'. So wee need to give a fallback value like 0 in the example
};

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

// Default Parameters
const calculateScore = (
  initialScore: number,
  penaltyPoints: number = 0
): number => {
  return initialScore - penaltyPoints;
};

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(200);
console.log('scoreAfterPenalty', scoreAfterPenalty);
console.log('scoreWithoutPenalty', scoreWithoutPenalty);

// Rest Parameter
const sum = (message: string, ...numbers: number[]): string => {
  let total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return `${message} ${total}.`;
};

let sumResult = sum('The total is : ', 1, 2, 3, 4, 5, 6);
console.log(sumResult);

// Void Keyword
const logMessage = (message: string) => {
  console.log(message);
};
logMessage('Hello, Typescript'); // const logMessage: (message: string) => void // NOTE - Void indicates that function does not return a value

// Challenge - ype Guards
const processInput = (val: string | number) => {
  if (typeof val === 'number') {
    console.log('Multiply number by 2:', val * 2);
  } else if (typeof val === 'string') {
    console.log('String to uppercase:', val.toUpperCase());
  }
};
processInput('cat meows a lot');
processInput(21);
processInput('Dog barks a lot');
processInput(42);

// Objects As Parameters
const createEmployee = ({
  id,
}: {
  id: number;
}): { id: number; isActive: boolean } => {
  return {
    id,
    isActive: id % 2 === 0,
  };
};
const employee = createEmployee({ id: 6 });
const employee2 = createEmployee({ id: 9 });
console.log(employee, employee2);

// Challenge
const processData = (
  input: number | string,
  config: { reverse: boolean } = { reverse: false }
): number | string => {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.split('').reverse().join('')
      : input.toUpperCase();
  }
};

console.log(processData(10));
console.log(processData('Hello World'));
console.log(processData('Hello World', { reverse: true }));

// Type Alias

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

createUser(john);
createUser(susan);
createUser({ id: 6, name: 'Serhat', isActive: true });

// Challenge
type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Stuff = Manager | Employee;

const alice: Employee = {
  id: 6,
  name: 'Alice',
  department: 'Frontend Development',
};
const steve: Employee = {
  id: 9,
  name: 'Steve',
  department: 'UX Design',
};
const bob: Manager = {
  id: 3,
  name: 'Bob',
  employees: [alice, steve],
};

const printStuffDetails = (stuff: Stuff): void => {
  if ('employees' in stuff) {
    console.log(
      `${stuff.name} is a manager and has ${stuff.employees.length} employees.`
    );
  } else {
    console.log(
      `${stuff.name} is an employee and in ${stuff.department} department.`
    );
  }
};

printStuffDetails(bob);
printStuffDetails(alice);
printStuffDetails(steve);

/* -------------------------------------------------------------------------- */
// SECTION - Objects

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 18 };
let notebook = { title: 'notebook' };

// let items: { title: string; cost: number }[] = [book, pen, notebook]; //NOTE - Property 'cost' is missing in type '{ title: string; }' but required in type '{ title: string; cost: number; }'.ts(2741)
let deskItems: { title: string; cost?: number }[] = [book, pen, notebook];
console.log(deskItems);

let bike: { brand: string; year: number } = { brand: 'climax', year: 2014 };
// bike.year = '2014' //NOTE - Type 'string' is not assignable to type 'number'.
let laptop: { brand: string; year: number } = { brand: 'MSI', year: 2024 };
// let laptop2: {brand:string; year:number} = {brand:'MAC'}  // Property 'year' is missing in type '{ brand: string; }' but required in type '{ brand: string; year: number; }'.ts(2741)
let products: { title: string; price?: number }[] = [
  { title: 'phone', price: 44 },
  { title: 'tv' },
];
console.log(products);

/* -------------------------------------------------------------------------- */
// SECTION - Arrays
let temperatures: number[] = [20, 18, 41];
temperatures.push(38);
// temperatures.push('36'); // NOTE -Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(temperatures);

let colors: string[] = ['yellow', 'blue', 'red'];
// colors.push(20); // NOTE - Argument of type 'number' is not assignable to parameter of type 'string'.
colors.push('green');
console.log(colors);

let mixedArray: (string | number)[] = ['apple', 6, 'banana', 8];
// mixedArray.push(true); //NOTE - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
mixedArray.push('cat');
console.log(mixedArray);

/* -------------------------------------------------------------------------- */
// SECTION - Challenge - Union Type
let orderStatus: 'shipped' | 'delivered' | 'processing' = 'processing';
orderStatus = 'delivered';
orderStatus = 'shipped';
// orderStatus = 'cancelled'; // Type '"cancelled"' is not assignable to type '"shipped" | "delivered" | "processing"'.

let discount: string | number = 20;
discount = '20%';
// discount = true; // Type 'boolean' is not assignable to type 'string | number'.

console.log('union type 🩷🩷🩷', orderStatus, discount);

/* -------------------------------------------------------------------------- */
// SECTION - Example
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (const book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log('foundBook 🩷🩷🩷', foundBook);
console.log('foundBook 🩷🩷🩷', foundBook?.length);

/* -------------------------------------------------------------------------- */
// SECTION - Type : Any

let notSure: any = 4;

notSure = (name: string) => {
  return name;
};

console.log(notSure('Bedirhan'));

/* -------------------------------------------------------------------------- */
//SECTION - Union Type

let tax: number | string = 20;
tax = '6';

console.log(tax);
let requestStatus: 'pending' | 'error' | 'success' = 'pending';

requestStatus = 'error';
requestStatus = 'success';
// requestStatus = 'random';  // Type '"random"' is not assignable to type '"pending" | "error" | "success"'.

console.log(requestStatus);

/* -------------------------------------------------------------------------- */

//SECTION - Type Annotations

let animal: string = 'Cat';
animal.concat(', loves milk.');

let water: boolean = true;
water.valueOf();

let num: number = 6;
num.toExponential();

console.log(animal);
console.log(water);
console.log(num);
