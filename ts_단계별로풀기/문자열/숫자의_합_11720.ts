const fs = require("fs");
const input_enter: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

const input: number[] = input_enter[1].split("").map(Number);
let result: number = 0;
input.forEach((i) => {
  result += i;
});
console.log(result);
