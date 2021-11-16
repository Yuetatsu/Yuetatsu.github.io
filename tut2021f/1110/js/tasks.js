/* --------------------
  課題1
 -------------------- */

function checkAge() {
  let num = Number(document.querySelector('#age').value);
  let answer = document.querySelector('#answer');
  if(num < 20) {
    if(num <= 0) answer.innerHTML = "エラー";
    else answer.innerHTML = "未成年";
  } else {
    if(num >= 65) answer.innerHTML = "高齢者";
    else answer.innerHTML = "成人";
  }

}

/* --------------------
  課題2
 -------------------- */

function checkYear() {
  let year = Number(document.querySelector('#year').value);
  let answer = document.querySelector('#answer2');
  if(year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) answer.innerHTML = "平年";
    else answer.innerHTML = "閏年";
  } else answer.innerHTML = "平年";
}


/*--------------------
  TASK SHOWING FUNCTION
 --------------------*/
function contentShowing(taskNum) {
  let contents = document.querySelectorAll(".task_object");
  for(let i = 0; i < contents.length; i++) {
    if(i !== taskNum) contents[i].classList.add("hide");
    else contents[i].classList.remove("hide");
  }
}