interface Person {
name:string;
age:number;
}
function greet(person:Person):void {
    console.log(`Hello,${person.name}!You are ${person.age}years old.`);
    
}
const person:Person={name:"john", age:30};
greet(person);