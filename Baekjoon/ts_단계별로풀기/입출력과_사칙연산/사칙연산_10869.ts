const fs = require("fs");
const input_enter: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

const input: number[] = input_space.map(Number);
console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(Math.floor(input[0] / input[1]));
console.log(input[0] % input[1]);
