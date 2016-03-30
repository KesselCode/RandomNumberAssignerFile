var clc = require('cli-color');

function Product(QR, RandomNumber) {
	this.QR = QR;
	this.RandomNumber = RandomNumber;
	this.speakQR = function(){
		console.log(this.QR);
	};
	this.speakRandomNumber = function(){
		console.log(this.RandomNumber);
	};
};



console.log("Please scan the QR code on the item to assign it a random number");
var prompt = require('prompt');
prompt.get('QRnumber', function(err, result){
if (err) {
	console.log(err);
	console.log('there was an err')
} else {

var CustomerAndProducts = require('/Users/Kessel/Desktop/RandomNumberAssignerFile/CustomerAndProducts.json');

};


var counter = 0;
var counter1 =0;



var checker = true;

var i =1;

var TakenRandNumbers = CustomerAndProducts.TakenRandomNumbers;

var thereIsNextProduct = true;

//Below it counts the number of products in the file and checks

while (thereIsNextProduct == true){
	var prdtz = 'Product' + i;
	if(prdtz == 'Product'+i){
		var prdtzString = prdtz.toString();
	}
	if (prdtzString == prdtz.toString()){
	if (CustomerAndProducts.hasOwnProperty(prdtzString)){
		i++;
		prdtzObj = CustomerAndProducts[prdtzString];
		QR1 = prdtzObj.QR;
		if (QR1==result.QRnumber){
			console.log("This product has already been assigned a random number");
			var counter = 3;
			var thereIsNextProduct = false;
		}
	} else {
		var counter1 = 1;
	};
};

	if (counter1 ==1){
	NumberOfProducts = i-1;
	console.log(NumberOfProducts);
	var counter1 = 2;
	};

	if (counter1 ==2){
		var thereIsNextProduct = false;
		var counter = 4;
	};
};

var counter2=0;

if(counter == 4){

	SequentialNumberOfProductBeingScanned = NumberOfProducts + 1;

	var prod1 = 'Product' + SequentialNumberOfProductBeingScanned;
	var prod1String = prod1.toString();

	var RandomIndex = Math.round((Math.random())*(CustomerAndProducts.UntakenRandomNumbers.length));

	var SingleUntakenRandomNumber = CustomerAndProducts.UntakenRandomNumbers[RandomIndex];

	CustomerAndProducts[prod1String] = {
		QR: result.QRnumber,
		RandomNumber: SingleUntakenRandomNumber
	};

	
	var counter =5;

	console.log(clc.greenBright("The following Random Number has been assigned to the stated QR code") + clc.bold("\nQR:") + CustomerAndProducts[prod1String].QR + clc.bold("\nRandom Number:") +CustomerAndProducts[prod1String].RandomNumber);


};

if (counter ==5){

	CustomerAndProducts.TakenRandomNumbers.push(SingleUntakenRandomNumber);
	CustomerAndProducts.UntakenRandomNumbers.splice(RandomIndex,1);
	var counter =6;

};

if (counter == 6){
	console.log('Taken random numbers: ' + CustomerAndProducts.TakenRandomNumbers);
	var counter = 7;
};

if (counter ==7){
	var fs = require('fs');
	fs.writeFile("/Users/Kessel/Desktop/RandomNumberAssignerFile/CustomerAndProducts.json",JSON.stringify(CustomerAndProducts), "utf8", function(err){
	if(err){
		return console.log(err);
	}
	console.log("The file was saved!")
});
}









})