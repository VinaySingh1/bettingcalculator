var _ = require('lodash');
var validations = require('./validations');
var resultfunc = require('./processresult');
var utilfunctions = require('./utilfunctions');

global.winData=[],	global.PlaceData=[],global.ExactaData = [];

module.exports.processingInput=function(input){
	var inputType = _.toUpper(input);
	inputType = _.split(inputType,':');
	switch(inputType[0]){
		case 'BET':{
			var productType = inputType[1];	
			var validationResult =JSON.parse(validations.inputValidations.betInputValidations(input));
			if(!validationResult.error)
			{
				if(productType ==='W' ){
				 winData.push(input);

				}else if(productType==='P'){
					PlaceData.push(input) ;

				}else if(productType==='E'){
					ExactaData.push(input) ;
				}
			}
			else{
				console.log(validationResult.msg);
			}
			break;
			
		}
		case 'RESULT':{
			var validationResult =JSON.parse(validations.inputValidations.resultInputValidations(input));
			if(!validationResult.error)
			{
				
				var result =JSON.parse(resultfunc.processResult.resultProcessing(winData,PlaceData,ExactaData,input));
				console.log(result);
				winData=[];
				PlaceData=[];
				ExactaData = [];
				
			}
			else{
				console.log(validationResult.msg);
			}
			break;

		}
		default:{
			console.log('Sorry, Invalid input');
			utilfunctions.utilfunc.showUsuage();
			break;
		}
	}
}