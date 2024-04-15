// const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;
// btn.disabled = true;

// const btn = document.querySelector<HTMLButtonElement>('.test-btn');
// if (btn) {
//   btn.disabled = true;
// }

const btn = document.querySelector('.test-btn')! as HTMLButtonElement; // type assertion
if (btn) {
  btn.disabled = true;
}
