
document.getElementById("calcoutPar").innerHTML="";
//Set on-click listeners
document.getElementById("btnClr").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btnPlus").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btnMult").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btnEqual").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btnDiv").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btnMin").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn1").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn0").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn2").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn3").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn4").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn5").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn6").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn7").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn8").setAttribute("onclick", "AllBtns(this.id)");
document.getElementById("btn9").setAttribute("onclick", "AllBtns(this.id)");
//Handles button clicks, mostly GUI
function AllBtns(id)
{
	document.getElementById(id).blur();
	var output=document.getElementById("calcoutPar").innerHTML;
	
	if(id=="btnClr")
		{
			document.getElementById("calcoutPar").innerHTML = "";
			return;
		}
	else if(id=="btnEqual")
		{
			
			document.getElementById("calcoutPar").innerHTML = eval(output);
			return;
		}
	else
		{
			output+=document.getElementById(id).innerHTML	;
			document.getElementById("calcoutPar").innerHTML = output;
			
		}
	
	
	
}
