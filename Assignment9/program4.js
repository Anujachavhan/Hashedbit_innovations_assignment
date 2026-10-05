let numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(function(num) {
        return num * num;
    });
}

console.log(squareNumbers(numbers));