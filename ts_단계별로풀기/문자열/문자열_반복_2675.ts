const fs = require("fs");
const input_enter: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

// const input_enter = ["2", "3 ABC", "5 /HTP"];

const count_input: number = parseInt(input_enter[0]);
for (let i: number = 1; i <= count_input; i++) {
  const list: string[] = input_enter[i].split(" ");
  const repeat_num: number = parseInt(list[0]);
  const repeat_string_arr: string[] = list[1].split("");
  let result_arr: string[] = [];
  repeat_string_arr.forEach((item) => {
    for (let k: number = 0; k < repeat_num; k++) {
      result_arr.push(item);
    }
  });
  console.log(result_arr.join("").toString());
}
