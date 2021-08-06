let number = prompt();

function randomDegree(n){
	return number ** (Math.floor(Math.random() * (10 - 1) + 1));
}

randomDegree(number);