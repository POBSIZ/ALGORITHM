const fs = require("fs");
const input_enter: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

const input: number[] = input_space.map(Number);
const A: number = input[0];
const B: number = input[1];
const C: number = input[2];
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);