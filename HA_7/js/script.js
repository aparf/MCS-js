let totalCash = parseInt(window.prompt("Amount of cash"));
let watchesCount = parseInt(window.prompt("How many watches?"));
let earringsCount = parseInt(window.prompt("How many earrings?"));
let watchesPrice = parseInt(window.prompt("Price for watch"));
let earringsPrice = parseInt(window.prompt("Price for earrings"));

function haveEnough(totalCash, watchesCount, earringsCount, watchesPrice, earringsPrice){
	if ((watchesCount * watchesPrice + earringsCount * earringsPrice) <= totalCash){
		document.body.innerHTML = "<h1>" + "Enough $$$" + "</h1>"
	}
	else{
		document.body.innerHTML = "<h1>" + "Not enough $$$" + "</h1>"
	}
}

haveEnough(totalCash, watchesCount, earringsCount, watchesPrice, earringsPrice);
