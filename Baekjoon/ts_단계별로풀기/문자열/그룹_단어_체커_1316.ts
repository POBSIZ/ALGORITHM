// '/dev/stdin'
const fs = require("fs");
// const input_single: string = fs.readFileSync(0, "utf8").toString();
const input_enter: string[] = fs.readFileSync(0, "utf8").toString().split("\n");
// const input_space: string[] = fs.readFileSync(0, "utf8").toString().split(" ");

// const input_enter: string[] = ["3", "happy", "new", "year"]; //3
// const input_enter: string[] = ["4", "aba", "abab", "abcabc", "a"]; //1
// const input_enter: string[] = ["5", "ab", "aa", "aca", "ba", "bb"]; // 4
// const input_enter: string[] = ["2", "yzyzy", "zyzyz"]; // 0
// const input_enter: string[] = ["1", "z"]; // 1
// const input_enter: string[] = ["1", "baddad"]; // 0

const isGroupStr = (_str: string): boolean => {
  let is_group: boolean = true;
  let str_arr: string[] = _str.split("");
  let check_arr: string[] = [];
  if (str_arr.length !== 1) {
    str_arr.forEach((item, i) => {
      if (!check_arr.includes(item)) {
        if (item !== str_arr[i - 1]) {
          check_arr.push(item);
        }
      } else if (item !== str_arr[i - 1]) {
        is_group = false;
      }
    });
  }
  return is_group;
};

const getGroupStrCount = (_input: string[]): number => {
  let result: number = 0;
  for (let i: number = 1; i <= Number(_input[0]); i++) {
    const curr_str: string = _input[i];
    if (isGroupStr(curr_str)) {
      result++;
    }
  }
  return result;
};

console.log(getGroupStrCount(input_enter));
