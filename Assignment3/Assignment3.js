
let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

let required_states= states.filter(function(state) {
    return !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase());
});
console.log(required_states);
console.log("------------------------------------------------------");

// program 2
let str = "I love my India";

let reverse_str = str.split(" ").reverse().join(" ");

console.log(reverse_str);
console.log("----------------------------------------------------");
// program 3
let string = "INDIA";

let arr = string.split("");

arr.splice(2, 2, "D", "O", "N", "E", "S");

let changed_string = arr.join("");

console.log(changed_string);
console.log("--------------------------------------------------------");


// program 4
let str2 = "JavaScript is very powerful";

let vowels = 0;
let consonants = 0;

for (let char of str2.toLowerCase()) {
  if (char >= "a" && char <= "z") {
    if ("aeiou".includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
console.log("----------------------------------------------------");

// program 5

function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

let correct_word = correctfn(
  "I love JavaScrpt",
  "JavaScrpt",
  "JavaScript"
);

console.log(correct_word);
console.log("-----------------------------------------------");

// program 6
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

const num_great_5 = inputArr.filter(num => num > 5);

console.log(num_great_5);
console.log("---------------------------------------------------");

// program 7
const students = [
  { name: "Anuja", scores: [80, 70, 60] },
  { name: "Sakshi", scores: [80, 70, 90] },
  { name: "Aakansha", scores: [60, 70, 80] },
  { name: "Meghna", scores: [90, 90, 80, 80] }
];

const No_Of_Words = students.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);

  const average = total / student.scores.length;

  return {
    name: student.name,
    average: average
  };
});

console.log(No_Of_Words);
console.log("-----------------------------------------------------");

// program 8
function repeatedSum(num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return num;
}

console.log(repeatedSum(456));
console.log("-----------------------------------------------------");


//program 9
function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

let paragraph = "JavaScript is a very powerful programming language.";

console.log(countWords(paragraph));

console.log("-----------------------------------------------------");


// program 10
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));
console.log("-----------------------------------------------------");

// program 11
const students1 = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },

  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },

  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

const result = Object.entries(students1).reduce((acc, [student, subjects]) => {
  const marks = Object.values(subjects);

  const total = marks.reduce((sum, mark) => sum + mark, 0);

  const average = total / marks.length;

  acc[student] = {
    average: average
  };

  return acc;
}, {});

console.log(result);