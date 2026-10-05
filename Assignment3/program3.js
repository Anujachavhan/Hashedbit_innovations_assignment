let string = "INDIA";

let arr = string.split("");

arr.splice(2, 2, "D", "O", "N", "E", "S");

let changed_string = arr.join("");

console.log(changed_string);