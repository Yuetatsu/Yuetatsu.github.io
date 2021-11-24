/*--------------------
  演習1
 --------------------*/

/* while version */
let ansWhile = document.querySelector("#answerWhile");
let i = 0;
while(i < fruitNames.length) {
  ansWhile.innerHTML += `<li>${fruitNames[i]}</li>`
  i++;
}
ansWhile.innerHTML = `<ul>${ansWhile.innerHTML}</ul>`;

/* for version */
let ansFor = document.querySelector("#answerFor");
for(let j = 0; j < fruitNames.length; j++) {
  ansFor.innerHTML += `<li>${fruitNames[j]}</li>`
}
ansFor.innerHTML = `<ul>${ansFor.innerHTML}</ul>`;

/*--------------------
  演習2
 --------------------*/

/* while version */
let ansWhile2 = document.querySelector("#answerWhile2");
let k = 0;
while(k < tweets.length) {
  ansWhile2.innerHTML += `<li><b>${tweets[k].name}</b>: ${tweets[k].message} <i>${tweets[k].tweetedAt}</i></li>`
  k++;
}
ansWhile2.innerHTML = `<ul>${ansWhile2.innerHTML}</ul>`;

/* for version */
let ansFor2 = document.querySelector("#answerFor2");
for(let l = 0; l < tweets.length; l++) {
  ansFor2.innerHTML += `<li><b>${tweets[l].name}</b>: ${tweets[l].message} <i>${tweets[l].tweetedAt}</i></li>`
}
ansFor2.innerHTML = `<ul>${ansFor2.innerHTML}</ul>`;

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