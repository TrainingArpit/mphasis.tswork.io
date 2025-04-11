namespace Shapes{
    export class Circle{
        constructor(public radius:number) {}
        getArea():number {
            return Math.PI*this.radius**2;
        }
    }
}
const circle=new Shapes.Circle(10);
console.log(circle.getArea());