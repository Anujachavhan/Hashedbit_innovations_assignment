let person = {
    name: "Anuja",
    age: 23,
    occupation: "Student"
};

function greet(person) {
    console.log("Hello, my name is " + person.name);
    console.log("I am " + person.age + " years old.");
    console.log("I am a " + person.occupation + ".");
}

greet(person);