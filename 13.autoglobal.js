function glob(){
	x = 10
	console.log(x)
}

glob() // 10

console.log(x) // 10




function glob(){
	var y = 10
	console.log(y)
}

glob() // 10

console.log(y) // ReferenceError