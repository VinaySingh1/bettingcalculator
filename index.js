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
	var inputType = _.split(input,':');
	//console.log(inputType);
	switch(inputType[0]){

		case 'Bet':{
					if(inputType[1]==='W' || inputType[1]==='w'){
						totalWinPool=totalWinPool+_.parseInt(inputType[3]);
						 winData.push(input);

					}else if(inputType[1]==='P' || inputType[1]==='p'){
						totalPlacePool=totalPlacePool+_.parseInt(inputType[3]);
						PlaceData.push(input) ;

					}else if(inputType[1]==='E' || inputType[1]==='e'){
						totalExactaPool=totalExactaPool+_.parseInt(inputType[3]);
						Exactadata.push(input) ;

					}			
					break;
				}
		case 'Result':{
					rl.pause();
					console.log("START PROCESSING DATA .......");

					rl.write(calculate.winbet(winData,totalWinPool,input));
					rl.write(calculate.placebet(PlaceData,totalPlacePool,input));
					rl.write(calculate.exactabet(Exactadata,totalExactaPool,input));
					rl.close();
					break;
				}

			};
  
});