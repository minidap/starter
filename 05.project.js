/*
* Buy and sell Items
*/


const BUY_PRICE = 1000;
const SELL_PRICE = 1200;

var amount = 10000;
var total = 10; //total number of products

function buyItem(num){
	if(num*BUY_PRICE <= amount){
		window.total += num;
		window.amount -= num*BUY_PRICE;
	}else{
		console.log("not enough money.");
	}
}

function sellItem(num){
	if(num<=total){
		window.total -= num;
		window.amount += num*SELL_PRICE;
	}else{
		console.log('not enough product');
	}
}


function totalAmount(){
	console.log(window.amount);
}

function totalProduct(){
	console.log(window.total);
}


