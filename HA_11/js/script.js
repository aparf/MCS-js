var text = document.querySelector("p");
console.log(text);
for (let i = 1; i < 100000; i++){
	if (i % 6 == 0){
		console.log(i);
		text.innerHTML += i + "<br>";
	}
}