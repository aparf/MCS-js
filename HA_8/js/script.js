window.addEventListener("load", function(){
	const openPopUp = document.querySelector(".request");
	const closePopUp = document.querySelector(".closePopup");
	const popUp = document.querySelector(".popup");

	const openBurger = document.querySelector(".openMenu")
	const closeBurger = document.querySelector(".closeMenu");
	const menu = document.querySelector(".menu");

	openPopUp.addEventListener("click", function(){
		popUp.style.display = "flex"
	})

	closePopUp.addEventListener("click", function(){
		popUp.style.display = "none"
	})
	openBurger.addEventListener("click", function(){
		menu.style.left = "0";
	})
	closeBurger.addEventListener("click", function(){
		menu.style.left = "-50vw";
	})


})