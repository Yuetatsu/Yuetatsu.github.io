/* --------------------
  復習1
-------------------- */
function hello() {
  console.log("こんにちはこんにちは");
}

function helloSomeone(name) {
  console.log(`こんにちは${name}さん`);
}

function helloCircleArea(radius) {
  console.log(radius * radius * Math.PI);
}

function helloRectangleArea(width, height) {
  console.log(width * height);
}

hello();
helloSomeone("佐々木");
helloCircleArea(5);
helloRectangleArea(2, 6);

/* --------------------
  復習2
-------------------- */

function circleArea(radius) {
  return radius * radius * Math.PI;
}

function rectangleArea(width, height) {
  return width * height;
}

console.log(`circleArea(5): ${circleArea(5)}`);
console.log(`rectangleArea(2, 6): ${rectangleArea(2, 6)}`);