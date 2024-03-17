// SECTION - Type : Any >

let notSure: any = 4;

notSure = (name: string) => {
  return name;
};

console.log(notSure('Bedirhan'));

/* -------------------------------------------------------------------------- */
//SECTION - Union Type >

// let tax: number | string = 20;
// tax = '6';

// console.log(tax);
// let requestStatus: 'pending' | 'error' | 'success' = 'pending';

// requestStatus = 'error';
// requestStatus = 'success';
// requestStatus = 'random';

// console.log(requestStatus);

/* -------------------------------------------------------------------------- */

//SECTION - Type Annotations >

// let animal: string = 'Cat';
// animal.concat(', loves milk.');

// let water: boolean = true;
// water.valueOf();

// let num: number = 6;
// num.toExponential();

// console.log(animal);
// console.log(water);
// console.log(num);
