alert('работает');

const Colored = document.getElementsByClassName('colored')[0]
console.log(Colored);

let color = prompt("color?");
Colored.style.backgroundColor = color;