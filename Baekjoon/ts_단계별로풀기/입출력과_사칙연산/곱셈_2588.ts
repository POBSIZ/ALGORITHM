const fs = require("fs");
const input_enter: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");
const input: number[] = input_enter.map(Number);
const f_num: number = input[0];
const s_num: number = input[1];
const sn_f = Math.floor(s_num / 100);
const sn_s = Math.floor((s_num - sn_f * 100) / 10);
const sn_t = s_num - sn_f * 100 - sn_s * 10;
console.log(sn_t * f_num);
console.log(sn_s * f_num);
console.log(sn_f * f_num);
console.log(s_num * f_num);