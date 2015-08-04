
function imgClk(){
	alert("image clicked");
};

function button1(){
	
	var Uinput = document.getElementById("UserInput");
	var Output = document.getElementById("content");

	Output.style.backgroundColor ="red";
	if(Uinput.value == "one"){
		Output.innerHTML = "the word 'one' was entered";
	}
	else{
		Output.innerHTML = "a word other than one was entered";
	};
};

function multiply(a, b){
	var answ = a * b;
	
 return answ;

};
function init(){
	setL(-300);
	animate();
	Eventhandle();
};
function setL(n){
	document.getElementById("img").style.left=n+"px";
};
function getL(){
	return parseInt(document.getElementById("img").style.left);
};
function animate(){
	if(getL()>0){
		setL(0);
	}
	if(getL()<1000){
		setL(getL()+3);
		setTimeout("animate()", 30);
	};
};
function Eventhandle(){
	var Obj_img = document.getElementById("img");
	Obj_img.addEventListener(
	'mouseover',
	imgClk,
	false
	);
};