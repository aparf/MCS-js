let bigObject = {
	names: ["Vasya", "Petya", "Kolya"],
	grades:[
		{
			intern: 0,
			junior: 1
		},
		{
			middle: 2,
			senior: 3

		}
	]
}

console.log(bigObject.grades[0].junior)