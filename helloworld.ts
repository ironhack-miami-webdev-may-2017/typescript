class Greeter {
  // TypeScript stuff alert!!
  constructor(
    public message: string,
    public whatever: number,
    public other: boolean) { }

  sayHi() {
      return `<h1>${this.message}</h1>`;
  }
}


function randomInteger (max: number) {
  return Math.floor(Math.random() * max);
}


const myGreetThang = new Greeter('Jello, world!', 99, true);

document.getElementById('container').innerHTML = myGreetThang.sayHi();

alert('YAY!');
