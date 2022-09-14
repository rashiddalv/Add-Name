function addName(){

var inputValue = document.getElementById("input").value;
var p = document.createElement("p");
p.innerHTML = inputValue;
document.getElementById("list").appendChild(p);


}