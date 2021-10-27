/* --------------------
  printLog: ログを出力
  printLogArgThree: 引数を3つ持つ。個別にコンソール出力
  printLogArgTwo: 引数を2つ持つ。2つ目の引数はデフォルト引数"Default"を持つ。
-------------------- */
function printLog(str) {
  console.log("printLog() =>")
  console.log(str);
}

function printLogArgThree(strA, strB, strC) {
  console.log("printLogArgThree() =>")
  console.log(`strA: ${strA}`);
  console.log(`strB: ${strB}`);
  console.log(`strC: ${strC}`);
}

function printLogArgTwo(strA, strB = "Default") {
  console.log("printLogArgTwo() =>")
  console.log(`strA: ${strA}`);
  console.log(`strB: ${strB}`);
}

let strA = "Function";
let strB = "Test";
let strC = "October 27";

printLog(strA + strB);
printLogArgThree(strA, strB, strC);
printLogArgTwo(strA);
printLogArgTwo(strA, strB);

/* --------------------
  multiply: 乗算を行う
  multiplyReturnOne: 乗算の行い1の位を返す
  multiplyReturnTen: 乗算を行い10の位を返す
-------------------- */
function multiply(numA, numB) {
  console.log("multiply() =>");
  return numA * numB;
}

function multiplyReturnOne(numA, numB) {
  console.log("multiplyReturnOne() =>");
  return numA * numB % 10;
}

function multiplyReturnTen(numA, numB) {
  console.log("multiplyReturnTen() =>");
  return Math.floor((numA * numB / 10) % 10);
}

let numA = 2021;
let numB = 1010;
let multi = multiply(numA, numB);
console.log(multi);
console.log(multiplyReturnOne(numA, numB));
console.log(multiplyReturnTen(numA, numB));
console.log(multiplyReturnTen(9,9));
