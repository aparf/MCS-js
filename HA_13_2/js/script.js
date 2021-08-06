let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

const container = document.getElementById('main');

crypto.forEach(currency => {
	const items = document.createElement('div');
	items.classList.add('items');

	const currencyName = document.createElement('div');
  	currencyName.textContent = currency.name;
  	currencyName.classList.add('text');
  	items.append(currencyName);


  	const currencyPrice = document.createElement('div');
  	currencyPrice.textContent = currency.price;
  	currencyPrice.classList.add('price'); 	
  	items.append(currencyPrice);


  	const bar = document.createElement('div');
  	bar.style.width = currency.price + "px";
  	bar.style.height = '100px';
  	const randomColor = Math.floor(Math.random()*16777215).toString(16); //random color
  	bar.style.backgroundColor = "#" + randomColor;
  	bar.classList.add('bar');
  	items.append(bar);

  	container.append(items);

});





// const myElement = document.createElement("div");
// const myContainer = document.querySelector('.container');
// myElement.textContent = 'hi!';
// myElement.classList.add('.text');
// myContainer.append(myElement);