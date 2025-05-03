const fs = require("fs");
const input_single: string = fs.readFileSync(0, 'utf8').toString();
const input_enter: string[] = fs.readFileSync(0, 'utf8').toString().split("\n");
const input_space: string[] = fs.readFileSync(0, 'utf8').toString().split(" ");

const input: string[] = input_single.trim().split(" ");
console.log(input[0] === "" ? 0 : input.length);
