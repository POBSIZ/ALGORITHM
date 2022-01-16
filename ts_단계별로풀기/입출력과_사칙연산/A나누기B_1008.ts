const fs = require("fs");
const input_enter: string[] = fs.readFileSync("/dev/stdin").toString().split("\n");
const input_space: string[] = fs.readFileSync(0, 'utf8').toString().split(' ');

const inputList: number[] = input_space.map(Number);
console.log(inputList[0] / inputList[1]);
