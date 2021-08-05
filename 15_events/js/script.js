window.addEventListener("load", function(){
	const button = document.querySelector("button");
	const par = document.querySelector("p");
	const ball = document.querySelector(".ball");
	let running = false;

	button.addEventListener("click", ()=>{
		if (!running){
			ball.style.animationPlayState = 'running'
		} else {
			ball.style.animationPlayState = 'paused'
		}
		running = !running;

	})

	window.onscroll = () => {
		if (scrollY > 500){
			par.style.opacity = 1;
		} else {
			par.style.opacity = 0.5;
		}
	}
})