var button = document.querySelector("button");
var isPurple = false;
//Callback function.
// document.querySelector("body");
// document.getElementsByTagName("body")[0]
//Is code ka shortcut h neeche wala code
//document.body.style.bakground = "prugle";

button.addEventListener("click", function(){
	// if white make it purple
	//else make make it white.
	//so will create a boolean variable is purple - false

	if(isPurple){
		document.body.style.background = "white";
		isPurple = false; //false boolean hona na ki string.
	}
	else{
		document.body.style.background = "purple";
		isPurple = true;
	}
	// document.body.style.background = "purple";
});