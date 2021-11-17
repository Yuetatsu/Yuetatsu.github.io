/*--------------------
  課題1
 --------------------*/
function doLoop() {
  let i = 0;
  let sum = 0;
  let sumOver = 0;
  while(i <= 10000) {
    sum += i;
    i++;
    // sumOverに0以外の数値の代入がなされている場合、もしくはsumが50000以下の場合 continue
    if(sumOver !== 0 || sum < 50000) continue;
    sumOver = sum;
  }
  document.querySelector("#answer").innerHTML = "総和: " + String(sum) + "<br>5万を超えた際の値: " + String(sumOver);
}


/*--------------------
  課題2
 --------------------*/
function doFizzBuzz() {
  let i = 1;
  while(i <= 100) {
    let ans = "";
    if(i % 3 === 0)
      ans += "Fizz";
    if(i % 5 === 0)
      ans += "Buzz";
    if(ans === "")
      ans = i;
    document.querySelector("#answer2").innerHTML += ans + "<br>";
    i++;
  }
}


/*--------------------
  課題3
 --------------------*/
function doCheckAnswers() {
  let str = document.querySelector("#input_string");
  let arr = Array.from(document.querySelectorAll(".answer-list li"));

  let ans = "";
  // 文字列が一致する場合　"正解"を代入
  arr.forEach(function(element){
    if(element.textContent === str.value) {
      ans = "正解";
    }
  });

  // どの文字列にも当てはまらなかった場合　"不正解"を代入
  if(ans === "") ans = "不正解";
  document.querySelector("#answer3").innerHTML = ans;
}


/*--------------------
  TASK SHOWING FUNCTION
 --------------------*/

let contents = document.querySelectorAll(".task_object");

function contentShowing(taskNum) {
  for(let i = 0; i < contents.length; i++) {
    if(i !== taskNum) contents[i].classList.add("hide");
    else contents[i].classList.remove("hide");
  }
}