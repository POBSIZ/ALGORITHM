const fs = require("fs");
const input_enter: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

const input_list: string[] = input_space[0].split("");
let result_list: number[] = Array(26).fill(-1);
input_list.forEach((item, i) => {
  for (let k: number = 97; k <= 122; k++) {
    if (item.charCodeAt(0) === k) {
      if (result_list[k - 97] === -1) {
        result_list[k - 97] = i;
      }
      break;
    }
  }
});
console.log(result_list.join(" ").toString());
