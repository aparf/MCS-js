const APIkey = "79cbd748d0304ce17342b8f974e85a00";
const form = document.forms[0];
const weather = document.querySelector(".weather");
const wind = document.querySelector(".wind");
console.log(form);


form.onsubmit = function(e){
	e.preventDefault();
	var city = form.elements.city.value;
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status == 200){
		var DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		weather.innerHTML += DATA.main.temp;
		wind.innerHTML += DATA.wind.speed;

	} else{
		console.log(xhr.status + ' ' + xhr.satusText);
	}
}