var operators = {
	'-': function(fn, sn){ return fn - sn},
	'*': function(fn, sn){ return fn * sn}
}

var cal = function(operand1, operand2, operator){
	return operators[operator](operand1, operand2);
}

cal(2, 4, '-')
cal(2, 4, '*')