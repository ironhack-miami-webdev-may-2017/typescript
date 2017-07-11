var Greeter = (function () {
    // TypeScript stuff alert!!
    function Greeter(message, whatever, other) {
        this.message = message;
        this.whatever = whatever;
        this.other = other;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
var myGreetThang = new Greeter('Jello, world!', 99, true);
document.getElementById('container').innerHTML = myGreetThang.sayHi();
alert('YAY!');
