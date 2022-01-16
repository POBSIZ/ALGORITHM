const max_count: number = 10000;

const getSelfNumber = (_num: number): number => {
  let sum_num: number = _num;
  let result: number = _num;
  while (sum_num !== 0) {
    result += sum_num % 10;
    sum_num = Math.floor(sum_num / 10);
  }
  return result;
};

const getSelfNumberList = (): boolean[] => {
  let self_number_list: boolean[] = Array(max_count + 1).fill(true);
  for (let i: number = 0; i <= max_count; i++) {
    self_number_list[getSelfNumber(i)] = false;
  }
  return self_number_list;
};

const showSelfNumber = () => {
  const self_number_list: boolean[] = getSelfNumberList();
  for (let i: number = 0; i < max_count; i++) {
    if (self_number_list[i]) {
      console.log(i);
    }
  }
};

showSelfNumber();
