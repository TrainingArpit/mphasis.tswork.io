function logClass(constructor:Function) {
    console.log(`Class ${constructor.name} is created`);
}
@logClass 
class Person{
    constructor(public name:string) {}
}
const person=new personalbar("John");