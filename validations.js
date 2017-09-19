var _ = require('lodash');

var validations ={

	betInputValidations:function(input){
		input = _.split(input,':');
		var productType = input[1];
		var selections = _.parseInt(input[2]);
		var stake = _.parseInt(input[3]);
		var exactaSelectionsArr =[];
		exactaSelectionsArr = _.split(input[2],',');
		var isError=false, errorMsg;

		if(productType !== 'W' && productType !== 'P' && productType !== 'E')
		{
			errorMsg="Invalid Input. possible values for betting product are P,W,E";
			isError=true;
			return  JSON.stringify({"error":isError, "msg":errorMsg});
		}

		if(_.isNaN(selections) )
		{
			errorMsg='Invalid input. Selections value should be numeric';
			isError= true;
			return  JSON.stringify({"error":isError, "msg":errorMsg});
		}

		if((productType === 'W' || productType === 'P') && (_.isNaN(selections)))
		{
			errorMsg="Invalid input value. Selections value should be greater than 0";
			isError=true;
			return  JSON.stringify({"error":isError, "msg":errorMsg});
			
		}
		if(productType === 'E' && (exactaSelectionsArr.length <=1 || _.isNaN(_.parseInt(exactaSelectionsArr[0])) || _.isNaN(_.parseInt(exactaSelectionsArr[1]))  || (exactaSelectionsArr[0]<=0) || (exactaSelectionsArr[1]<=0)))
		{
			errorMsg="Invalid input value. Selections value should be greater than 0 and numeric.";
			isError=true;
			return  JSON.stringify({"error":isError, "msg":errorMsg});
		}
		if(_.isNaN(stake) || stake <=0 )
		{
			errorMsg="Invalid input value. Stakes value should be numeric and greater than 0.";
			isError=true;
			return  JSON.stringify({"error":isError, "msg":errorMsg});
		}

		return JSON.stringify({"error":isError, "msg":''});
		
	},

	resultInputValidations: function(input){
		var resultArr = [];
		resultArr = _.split(input,':');
		var isError=false;
		if(_.isNaN(resultArr[1]) || _.isNaN(resultArr[2]) || _.isNaN(resultArr[3]) || (resultArr[1]<=0) || (resultArr[2]<=0) || (resultArr[3]<=0))
		{
			errorMsg="Invalid result input. Winner selections should be numeric and greater than 0.";
			isError=true;
			return  JSON.stringify({"error":isError, "msg":errorMsg});
		}
		return JSON.stringify({"error":isError, "msg":''});


	}
}

module.exports.inputValidations = validations;