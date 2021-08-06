window.addEventListener("load", function(){
	const form = document.forms[0];
	console.log(form.elements);
	const result = document.querySelector('.total');
	form.onsubmit = function(e){
		e.preventDefault();
		result.innerHTML = Math.sin(parseFloat(form.elements.degrees.value) * Math.PI/180);
	}
})