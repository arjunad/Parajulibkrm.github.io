var exp = 0;
var result;

document.getElementById("calc-operation").innerHTML = exp;
function insert(a) {
	a = a.toString();
	// if (a = "0" || a = "1" || a = "2" || a = "3" || a = "4" || a = "5" || a = "6" || a = "7" || a = "8" || a = "9" ) {
	// 	a = parseFloat(a, 10);
	// }
		if (exp.length > 20) {
		return;
		}
	exp = exp + a;
	
	while(exp.charAt(0) === '0')
		{
		 exp = exp.substr(1);
		}
	if (exp.charAt(0)===".") {
		exp = "0"+ exp;
	}
	if (!exp) {
		exp = 0;
	}
	if ( exp === ".") {
		exp = "0."
	}
	document.getElementById("calc-operation").innerHTML = exp;
}
function equals() {
	exp = document.getElementById("calc-operation").innerHTML;
	if (exp) {
		result = eval(exp);
	}
	document.getElementById("calc-typed").innerHTML = result;

}
function c() {
	exp = "0";
	result = "";
	document.getElementById("calc-operation").innerHTML = exp;
	document.getElementById("calc-typed").innerHTML = result;
}
function backspace() {
	num = exp.length;
	exp = exp.substring(0, num - 1);
	result = "";
	if(!exp) {
		exp =0;
	}
	document.getElementById("calc-operation").innerHTML = exp;
	document.getElementById("calc-typed").innerHTML = result;
}

function short(ans) {
numObj.toFixed(6);
}
