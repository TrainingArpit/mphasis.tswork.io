function greet(person) {
    console.log("Hello,".concat(person.name, "!You are ").concat(person.age, "years old."));
}
var person = { name: "john", age: 30 };
greet(person);
