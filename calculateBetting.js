
var _ = require('lodash');


module.exports.winbet = function(windata,result){
	var totalWinTicket=0,totalPoolValue=0, windividend=0, resultArr = [];
	resultArr = _.split(result,':');
	_.forEach(windata,function(value,key){
		var windataArr= [];
		windataArr = _.split(value,':');
		totalPoolValue=totalPoolValue+_.parseInt(windataArr[3]);		
		if(windataArr[2] === resultArr[1]){
			totalWinTicket=totalWinTicket+_.parseInt(windataArr[3]);
		}

	});
	if(totalWinTicket>0)
	{
		windividend =  (totalPoolValue*process.env.WIN_COMMISSION)/100;
		windividend = totalPoolValue - windividend;
		windividend = (totalWinTicket >0 ? (windividend/totalWinTicket): 0 );
		return "Win : "+resultArr[1]+' : '+'$'+_.round((windividend), 2).toFixed(2);
	}else
	{
		return "No Win bet won";
	}
	

}

module.exports.placebet = function(placedata,result){
	//console.log("--placebet calculation-----");
	var totalPlaceTicket=0,totalPoolValue=0, placedividend=0, resultArr = [], placeresult=[];
	resultArr = _.split(result,':');
	_.forEach(placedata,function(value,key){
		var placedataArr= [];
		placedataArr = _.split(value,':');
		totalPoolValue=totalPoolValue+_.parseInt(placedataArr[3]);
		if(_.indexOf(resultArr, placedataArr[2]) >0)
		{
			if(typeof placeresult[placedataArr[2]] !=='undefined')
			{

				placeresult[placedataArr[2]] = placeresult[placedataArr[2]] + _.parseInt(placedataArr[3]) ; 
			}else{
				placeresult[placedataArr[2]]= 0;
				placeresult[placedataArr[2]]= placeresult[placedataArr[2]] + _.parseInt(placedataArr[3]) ; 

			}
			
		}     		

	});
	
	var placeBetting='';
	if(placeresult.length >0)
	{
		_.forEach(placeresult,function(value, key){

			if(value !=null && value !='undefined'){
				placedividend = (totalPoolValue*process.env.PLACE_COMMISSION)/100;
				placedividend = totalPoolValue - placedividend;
				placedividend = placedividend/3;
				placedividend = (placeresult[key] >0 ? (placedividend/placeresult[key]): 0 );
				placeBetting+=  "Place : "+key+' : '+'$'+_.round((placedividend), 2).toFixed(2);

			}			

		});
	}
	else{
		placeBetting ="No place bet won";	
	}
	return placeBetting;
}

module.exports.exactabet = function(exactadata,result){
	var totalexactTicket=0, exactadividend=0,totalPoolValue=0, resultArr = [], exactaresult=[];
	resultArr = _.split(result,':');
	var compareVaule = resultArr[1]+','+resultArr[2];
	_.forEach(exactadata,function(value,key){
		var exactadataArr= [];
		exactadataArr = _.split(value,':');	
		totalPoolValue=totalPoolValue+_.parseInt(exactadataArr[3]);	
		if(exactadataArr[2] === compareVaule)
		{
			totalexactTicket= totalexactTicket + _.parseInt(exactadataArr[3]);			
		}     		

	});
	var exactearetting='';
	if(totalexactTicket > 0){

		exactadividend = (totalPoolValue*process.env.EXACTA_COMMISSION)/100;
		exactadividend = totalPoolValue - exactadividend;
		exactadividend = (totalexactTicket >0 ? (exactadividend/totalexactTicket): 0 );

		exactearetting+=  "Exacta : "+compareVaule+' : '+'$'+_.round((exactadividend), 2).toFixed(2);	
	}
	else
	{
		exactearetting="No Exacta bet won";
	}
	return exactearetting;
}