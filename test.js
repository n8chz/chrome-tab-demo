console.log("checking in");

document.getElementById("clickme").onclick = function () {
 var newButton = document.createElement("button");
 newButton.textContent = "now click me";
 newButton.onclick = function () {
  document.getElementById("bottom").style.backgroundColor = "pink";
 };
 document.getElementById("bottom").appendChild(newButton);
 alert("I'm an alert. If you comment me out, the tab will revert to its unmodified state, probably before you even see the second button.");
};
