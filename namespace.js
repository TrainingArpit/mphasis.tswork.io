var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * Math.pow(this.radius, 2);
        };
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var circle = new Shapes.Circle(10);
console.log(circle.getArea());
