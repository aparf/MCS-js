const myBody = document.querySelector('body');
myBody.style.backgroundColor = "#696969";

const myPage = document.getElementsByClassName('page')[0];
myPage.style.color = "ghostwhite";

const myName = document.getElementsByClassName('name')[0];
myName.innerHTML = "DJ Rashad"

const myImage = document.querySelector('img');
myImage.src = "https://www.thewire.co.uk/img/scale/940/736/2019/04/26/DJ_RASHAD1-01.jpg"

const myBorder = document.getElementsByClassName('short-bio')[0];
myBorder.className += ' animated';