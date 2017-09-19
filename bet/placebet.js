
var _ = require('lodash');

module.exports.placeBet = function(placedata,result){
	var totalPlaceTicket=0,totalPoolValue=0, placeDividend=0, resultArr = [], placeResult=[];
	resultArr = _.split(result,':');
	if(placedata.length >0){
		_.forEach(placedata,function(value,key){
			var placedataArr= [];
			placedataArr = _.split(value,':');
			totalPoolValue=totalPoolValue+_.parseInt(placedataArr[3]);
			if(_.indexOf(resultArr, placedataArr[2]) >0)
			{
				if(typeof placeResult[placedataArr[2]] !=='undefined')
				{

					placeResult[placedataArr[2]] = placeResult[placedataArr[2]] + _.parseInt(placedataArr[3]) ; 
				}else{
					placeResult[placedataArr[2]]= 0;
					placeResult[placedataArr[2]]= placeResult[placedataArr[2]] + _.parseInt(placedataArr[3]) ; 

				}				
			}
		});
	}
		
	var placeBetting='';
	if(placeResult.length >0){
		_.forEach(placeResult,function(value, key){

			if(value !=null && value !='undefined'){
				placeDividend = (totalPoolValue*process.env.PLACE_COMMISSION)/100;
				placeDividend = totalPoolValue - placeDividend;
				placeDividend = placeDividend/3;
				placeDividend = (placeResult[key] >0 ? (placeDividend/placeResult[key]): 0 );
				placeBetting+=  "Place : "+key+' : '+'$'+_.round((placeDividend), 2).toFixed(2);
			}			

		});
	}else{
		placeBetting ="No place bet won";	
	}

	return JSON.stringify({'error':'','msg':placeBetting});
}