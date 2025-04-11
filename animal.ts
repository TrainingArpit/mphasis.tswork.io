class Animal{
    name:string;
    sound:string;

constructor(name:string,sound:string){
    this.name = name;
    this.sound = sound;
}
makeSound(): void{
    console.log(`${this.name} says ${this.sound}`);
}
}

class Dog extends Animal {
    constructor(name:string) {
        super(name,"Woof");
    }
makeSound():void {
   console.log(`${this.name} barks:${this.sound}`);
}
}
const dog=new Dog("Rex");
dog.makeSound();