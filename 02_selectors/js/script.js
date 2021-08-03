alert('работает');

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');
console.log(byTag);
console.log(byClass);
console.log(byId);

const allBySlectors = document.querySelectorAll('.coolClass.mine')
const firstBySelector = document.querySelector('div');
console.log(allBySlectors);
console.log(firstBySelector);

byId.innerHTML = "<h1>hi!</h1>";