function changeArray(arr) {
    arr.push("Mango");
    arr.pop();

    return arr;
}

let fruits = ["Apple", "Banana", "Orange"];

console.log(changeArray(fruits));