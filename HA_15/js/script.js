class Tiger{
	constructor(name){
		this.name = name;
	}

	feedCat(){
		console.log("Purrrrrr");
	}
}

class angryTiger extends Tiger{
	throwDart(){
		console.log("ZzZzzZzZz")
	}

}