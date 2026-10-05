function repeatedSum(num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return num;
}

console.log(repeatedSum(456));