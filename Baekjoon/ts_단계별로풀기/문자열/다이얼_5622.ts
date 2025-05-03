// '/dev/stdin'
// 0, 'utf8'
const fs = require("fs");
const input_single: string = fs.readFileSync(0, "utf8").toString();
const input_enter: string[] = fs.readFileSync(0, "utf8").toString().split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

const input: string[] = input_single.split("");
// const input: string[] = "UNUCIC".split("");
let result: number = 0;
const alphabets: object = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
input.forEach((item, i) => {
  for (let key in alphabets) {
    if (key.includes(item)) {
      result += alphabets[key];
      break;
    }
  }
});
console.log(result);
