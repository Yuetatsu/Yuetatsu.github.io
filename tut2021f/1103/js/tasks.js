/*--------------------
  課題1
 --------------------*/
let modal = document.querySelector("#modal1");

function showModal() {
  modal.innerHTML = "クリックされたよ!";
}


/*--------------------
  課題2
 --------------------*/
let modal2 = document.querySelector("#modal2");

function changeRed() {
  modal2.style.backgroundColor = "red";
}

function changeYellow() {
  modal2.style.backgroundColor = "yellow";
}

function changeGreen() {
  modal2.style.backgroundColor = "green";
}


/*--------------------
  課題3
 --------------------*/
let modal3 = document.querySelector("#modal3");

function appendCircle() {
  modal3.innerHTML = modal3.innerHTML + "〇";
}

function appendCross() {
  modal3.innerHTML = modal3.innerHTML + "×";
}


/*--------------------
  課題4
 --------------------*/
let modal4 = document.querySelector("#modal4");

function plusOne() {
  modal4.innerHTML = String(Number(modal4.innerHTML) + 1);
}

function plusFive() {
  modal4.innerHTML = String(Number(modal4.innerHTML) + 5);
}

function plusTen() {
  modal4.innerHTML = String(Number(modal4.innerHTML) + 10);
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