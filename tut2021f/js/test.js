console.log("Hello World");
console.log("Console Log Test");
console.log("Welcome to JavaScript!");
let hue = 0;

const changeColor=function() {
  let id = document.getElementById("cc");
  id.style.color = "hsl(" + hue + ", 100%, 50%)";
  hue++;
  hue %= 360;
  setTimeout(changeColor, 1000/60)
}

window.onload=function() {
  changeColor();
}
