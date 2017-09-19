
var _ = require('lodash');

module.exports.exactaBet = function(exactadata,result){
	var totalExactaTicket = 0, exactaDividend = 0, totalPoolValue = 0, resultArr = [];
	resultArr = _.split(result,':');
	var firstAndSecPosition = resultArr[1] + ',' + resultArr[2];
	if(exactadata.length >0){
		_.forEach(exactadata,function(value,key){
			var exactadataArr= [];
			exactadataArr = _.split(value,':');
				
			var exactaSelection = exactadataArr[2];
			totalPoolValue=totalPoolValue + _.parseInt(exactadataArr[3]);	
			if(exactaSelection === firstAndSecPosition)
			{
				totalExactaTicket= totalExactaTicket + _.parseInt(exactadataArr[3]);			
			}
		});	
	}
	
	var exactaBetting='';
	if(totalExactaTicket > 0){

		exactaDividend = (totalPoolValue*process.env.EXACTA_COMMISSION)/100;
		exactaDividend = totalPoolValue - exactaDividend;
		exactaDividend = (totalExactaTicket >0 ? (exactaDividend/totalExactaTicket): 0 );

		exactaBetting+=  "Exacta : "+firstAndSecPosition+' : '+'$'+_.round((exactaDividend), 2).toFixed(2)+' ';	
	}else{
		exactaBetting="No Exacta bet won";
	}

	return JSON.stringify({'error':'','msg':exactaBetting});;
}