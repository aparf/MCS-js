let artistName = prompt("enter the musician").toLowerCase();

switch(artistName){
	case 'dr. dre':
		console.log('rap');
		break;
	case 'dorn':
		console.log('pop');
		break;
	default:
		console.log('noname');
		break;
}