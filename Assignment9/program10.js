let numbers = [10, 20, 30, 40];

function findSum(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}

console.log(findSum(numbers));
