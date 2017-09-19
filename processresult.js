var _ = require('lodash');
var processWinBet =require('./bet/winbet');
var processPlaceBet =require('./bet/placebet');
var processExactaBet =require('./bet/exactabet');

var processResultObj ={
	resultProcessing:function(winData, placeData, exactaData, result){
		var winresult = JSON.parse(processWinBet.winBet(winData,result));
		var placeresult = JSON.parse(processPlaceBet.placeBet(placeData,result));
		var exactaresult = JSON.parse(processExactaBet.exactaBet(exactaData,result));
		
		return JSON.stringify({'winresult':winresult.msg,'placeresult':placeresult.msg,'exactaresult':exactaresult.msg});
	}
}

module.exports.processResult = processResultObj;