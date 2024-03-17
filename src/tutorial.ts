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

// let tax: number | string = 20;
// tax = '6';

// console.log(tax);
// let requestStatus: 'pending' | 'error' | 'success' = 'pending';

// requestStatus = 'error';
// requestStatus = 'success';
// requestStatus = 'random';

// console.log(requestStatus);

/* -------------------------------------------------------------------------- */

//SECTION - Type Annotations

// let animal: string = 'Cat';
// animal.concat(', loves milk.');

// let water: boolean = true;
// water.valueOf();

// let num: number = 6;
// num.toExponential();

// console.log(animal);
// console.log(water);
// console.log(num);
