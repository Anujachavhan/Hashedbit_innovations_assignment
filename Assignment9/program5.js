let numbers = [1, 2, 3, 4, 5, 6];

function getOddNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
}

console.log(getOddNumbers(numbers));