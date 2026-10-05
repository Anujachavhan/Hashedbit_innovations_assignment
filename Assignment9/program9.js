let person1 = {
    name: "Anuja"
};

let person2 = {
    age: 23
};

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects(person1, person2));