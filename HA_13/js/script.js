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




for (coin of crypto){
  var name;

  for (key in coin){
    if (key == "name"){
      name = document.querySelector("." + coin[key]); // does not work
      // name1 = document.querySelector("." + coin[key]); works
      console.log(coin, name1);
    }
    else{
      console.log(coin, name1);
      // nWidth = 100 + coin[key];
      // name1.style.width = coin[key] + 'px';
      name.setAttribute("style", "width:" + nWidth + "px"); //does not work
      //name1.setAttribute("style", "width:" + nWidth + "px"); works
    }
   
  }
}