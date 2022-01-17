const fs = require("fs");
const input_single: string = fs.readFileSync(0, "utf8").toString();
const input_enter: string[] = fs.readFileSync(0, "utf8").toString().split("\n");
const input_space: string[] = fs.readFileSync("/dev/stdin").toString().split(" ");

// const input_space = ["734", "893"];

const f_num: number = Number(input_space[0].split("").reverse().join(""));
const s_num: number = Number(input_space[1].split("").reverse().join(""));
console.log(f_num > s_num ? f_num : s_num);