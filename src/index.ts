export {};

// Operator '+' cannot be applied to types 'Number' and number

// EXAMPLE 1 - Always use the `number` type when typing numbers in TypeScript

const num: number = 100;

console.log(num + 100); // 👉️ 200

// ---------------------------------------------------

// // EXAMPLE 2 - Implicitly typed variable

// // 👇️ const num: 100
// const num = 100;

// console.log(num + 100); // 👉️ 200
