var _ = require('lodash');


module.exports.winBet = function(windata,result){
	var totalWinTicket=0,totalPoolValue=0, windividend=0, resultArr = [];
	resultArr = _.split(result,':');
	if(windata.length >0){
		_.forEach(windata,function(value,key){
			var windataArr= [];
			windataArr = _.split(value,':');
			totalPoolValue=totalPoolValue+_.parseInt(windataArr[3]);		
			if(windataArr[2] === resultArr[1]){
				totalWinTicket=totalWinTicket+_.parseInt(windataArr[3]);
			}
		});	
	}
	
	if(totalWinTicket>0){
		windividend =  (totalPoolValue*process.env.WIN_COMMISSION)/100;
		windividend = totalPoolValue - windividend;
		windividend = (totalWinTicket >0 ? (windividend/totalWinTicket): 0 );

		return JSON.stringify({'error':'','msg':"Win : "+resultArr[1]+' : '+'$'+_.round((windividend), 2).toFixed(2)});
	}else{
		return JSON.stringify({'error':'','msg':'No Win bet won'});
	}
}