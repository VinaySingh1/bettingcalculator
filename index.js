require('dotenv').load();
var readline = require('readline');
var _ = require('lodash');

var calculate = require('./calculateBetting');
var winData=[],
	PlaceData=[],
	Exactadata = [],
	totalWinPool=0,
	totalPlacePool=0,
	totalExactaPool=0;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	var inputType = _.toUpper(input);
	inputType = _.split(inputType,':');
	switch(inputType[0]){

		case 'BET':{

					var productType = inputType[1];
					var selections = _.parseInt(inputType[2]);
					var exactaSelectionsArr =[];
					exactaSelectionsArr = _.split(inputType[2],',');
					var stake = _.parseInt(inputType[3]);
					var isError= false;
					if(_.isNaN(selections) )
					{
						console.log('Invalid input. Selections value should be numeric ');
						isError= true;
					}

					if((productType === 'W' || productType === 'P') && (_.isNaN(selections)))
					{
						console.log('Invalid input value. Selections value should be greater than 0');
						isError= true;
					}
					if(productType === 'E' && (exactaSelectionsArr.length <=1 || _.isNaN(_.parseInt(exactaSelectionsArr[0])) || _.isNaN(_.parseInt(exactaSelectionsArr[1]))  || (exactaSelectionsArr[0]<=0) || (exactaSelectionsArr[1]<=0)))
					{
						console.log('Invalid input value. Selections value should be greater than 0 and numeric.');
						isError= true;
					}
					if(_.isNaN(stake) || stake <=0 )
					{
						console.log('Invalid input value. Stakes value should be numeric and greater than 0.');
						isError= true;
					}
					
					if(isError === false){
						if(productType ==='W' ){
						 winData.push(input);

						}else if(productType==='P'){
							PlaceData.push(input) ;

						}else if(productType==='E'){
							Exactadata.push(input) ;

						}
					}					
						
					break;
				}
		case 'RESULT':{
					var resultArr = [];
					resultArr = _.split(input,':');

					if(_.isNaN(resultArr[1]) || _.isNaN(resultArr[2]) || _.isNaN(resultArr[3]) || (resultArr[1]<=0) || (resultArr[2]<=0) || (resultArr[3]<=0))
					{
						console.log('Invalid result input. Winner selections should be numeric and greater than 0.')
					}else{						
						rl.pause();
						console.log("\n The result  .......");
						rl.write(calculate.winbet(winData,input));
						rl.write(calculate.placebet(PlaceData,input));
						rl.write(calculate.exactabet(Exactadata,input));
						rl.close();
					}
					break;
				}
		default:{
			console.log('Sorry Invalid input');
			break;
		}

	};  
});