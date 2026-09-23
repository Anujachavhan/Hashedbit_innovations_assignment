// program 1
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("------------------------------------------------");

// program 2
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+")); 
console.log(calculator(10, 5, "-")); 
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 5, "/"));

console.log("----------------------------------------------");

// program 3

function findTax(salary) {
    let taxRate;

    switch (true) {
        case salary > 0 && salary <= 500000:
            taxRate = 0;
            break;

        case salary > 500000 && salary <= 1000000:
            taxRate = 10;
            break;

        case salary > 1000000 && salary <= 1500000:
            taxRate = 20;
            break;

        case salary > 1500000:
            taxRate = 30;
            break;

        default:
            return "Invalid salary";
    }

    return (salary * taxRate) / 100;
}

console.log(findTax(400000));   
console.log(findTax(800000));  
console.log(findTax(1200000)); 
console.log(findTax(2000000));  
console.log("------------------------------------------------");

// program 4

function sumOfProducts(n1, n2) {
    let str1 = String(n1);
    let str2 = String(n2);

    let length = Math.max(str1.length, str2.length);


    str1 = str1.padStart(length, "0");
    str2 = str2.padStart(length, "0");

    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += Number(str1[i]) * Number(str2[i]);
    }

    return sum;
}

console.log(sumOfProducts(6, 34));