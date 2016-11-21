function add(){
	console.log(4+8);
}

add();//12

function add(fn, sn){
//	console.log(fn+sn);
	return fn + sn;
}
var sum = add(4, 8);


// calling function from another function
function addAll(){
//	console.log(arguments.length);
	var sum = 0;
	for(var i=0; i<arguments.length;i++){
		sum = add(+arguments[i], sum)//'3'+ 17 = concat
	}
	return sum;
}

var sum = addAll(4, 8, 5, 2, 4, 88);
addAll(4, 8, 5, '3')//'317'


function addAll(){
//	console.log(arguments.length);
	var sum = 0;
	for(var i=0; i<arguments.length;i++){
		if(!isNaN(arguments[i])){
			sum = add(+arguments[i], sum)
		}
	}
	return sum;
}

var sum = addAll(4, 8, 5, 2, 4, 88);
addAll(4, 8, 5, '3')//'317'


---------------------------------
	
	
function greet(user){
	console.log("Welcome ", user);
}

greet("Puneet");// Welcome Puneet

var greetMessage = greet;
greetMessage("Manoj")// Welcome Manoj


// anonymous function, function without name
var myFunc = function(){
	console.log("Hello World")
}

myFunc();


















