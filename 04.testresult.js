function checkNum(num){
	if(num > 70){
		return true;
	}else {
		return false;
	}
}

var number = prompt("Number :");
 if (checkNum(number) == true ) {
 	console.log("pass test");
 } else{
 	console.log("fail test.")
 };