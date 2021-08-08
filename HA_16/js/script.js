window.addEventListener("load", function(){

	class Person{
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}

		hasCat(check){
			if (check == "yes") {this.happiness += 1};
		}

		hasRest(check){
			if (check == "yes") {this.happiness += 1};
		}

		hasMoney(check){
			if (check == "yes") {this.happiness += 1};
		}

		isSunny(degrees){
			if (degrees > 15) {this.happiness += 1};
		}
	}

	const form = document.forms[0];

	const APIkey = "79cbd748d0304ce17342b8f974e85a00";
	const city = "Moscow";
	const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

	const personName = document.querySelector('.personName');
	const personIcon = document.querySelector('.icon');

	form.onsubmit = function(event){
		event.preventDefault();

		let name = form.elements.name.value;
		let cat = form.elements.cat.value;
		let rest = form.elements.rest.value;
		let money = form.elements.money.value;

		let degreesNow = 0;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		if (xhr.status == 200){
			var DATA = JSON.parse(xhr.responseText);
			degreesNow += (DATA.main.temp - 273);
		} else{
			console.log(xhr.status + ' ' + xhr.satusText);
		}
		console.log(degreesNow)

		let newPerson = new Person(name);
		newPerson.hasCat(cat);
		newPerson.hasRest(rest);
		newPerson.hasMoney(money);
		newPerson.isSunny(degreesNow);
		console.log(newPerson.happiness);

		personName.textContent = newPerson.name;

		switch(newPerson.happiness){
			case 4:
				personIcon.textContent = '😁';
				break;
			case 3:
			case 2:
				personIcon.textContent = '😐';
				break;
			default:
				personIcon.textContent = '☹️';
				break;
		}
	}
})