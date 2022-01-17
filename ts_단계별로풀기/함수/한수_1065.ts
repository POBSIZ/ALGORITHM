// const fs = require("fs");
// let input: string = fs.readFileSync("/dev/stdin").toString().split("\n");

const genNumArr = (_num: number): number[] => {
  let result_arr: number[] = [];
  let input_num: number = _num;
  while (input_num !== 0) {
    result_arr.unshift(input_num % 10);
    input_num = Math.floor(input_num / 10);
  }
  return result_arr;
};

const checkOneNum = (_num: number): boolean => {
  const num_arr: number[] = genNumArr(_num);
  let num_gap: number = 0;
  if (num_arr.length === 1) {
    return true;
  } else if (num_arr.length > 1) {
    num_gap = (num_arr[0] - num_arr[1]) * -1;
  }
  for (let i: number = 0; i < num_arr.length - 1; i++) {
    if (num_arr[i] + num_gap !== num_arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const oneNumCount = (_maxNum: number): number => {
  let result_count: number = 0;
  for (let i: number = 1; i <= _maxNum; i++) {
    if (checkOneNum(i) === true) {
      result_count++;
    }
  }
  return result_count;
};

// console.log(oneNumCount(parseInt(input)));
