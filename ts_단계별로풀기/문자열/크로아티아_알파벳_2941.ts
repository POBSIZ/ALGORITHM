// '/dev/stdin'
// 0, 'utf8'
const fs = require("fs");
const input_single: string = fs.readFileSync(0, "utf8").toString();
const input_enter: string[] = fs.readFileSync(0, "utf8").toString().split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

let input: string = input_single.trim();
// let input: string = "ddz=z=";
const str_set: string[] = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
str_set.forEach((item: string) => {
  input = input.split(item).join("O");
});
console.log(input.length);
