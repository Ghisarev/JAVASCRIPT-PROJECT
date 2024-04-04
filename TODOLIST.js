const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
	if(inputBox==='')
	{
		alert("You must write something!!!");
	}
	else{
		let li=document.createElement("li");
		li.innerHTML=inputBox.value;
		listcontainer.appendChild(li);
		inputBox.value="";
	}
}