const button = document.querySelector('button');
const par = document.querySelector('p');

var visible = false;
// console.log(button.innerHTML);
button.addEventListener('click', function(){
	if (!(visible)){
		button.innerHTML = 'скрыть'
		par.style.display='block'
	} else{
		button.innerHTML = 'показать'
		par.style.display= 'none'
	}
	visible = !(visible);
})