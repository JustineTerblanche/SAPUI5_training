function loaded(){
	alert("page loaded");
}
function button1(){
	var answer = multiply(3, 4);
	alert(answer);

}
function multiply(a, b){
	var answ = a * b;	
 return answ;
};
function returnmax(arr){
var hold = 0;
for(i=0;i<arr.length;i++){
if(hold>arr[i]){
			hold = arr[i];
		}
}
return hold;
}

function button1(){
Var arrayO = new Array();
arrayO[0] = 1;
arrayO[1] = 5;
arrayO[2] = 4;
arrayO[3] = 3;
arrayO[4] = 6;
arrayO[5] = 2;
arrayO[6] = 7;
alert(returnmax(arrayO));
}
