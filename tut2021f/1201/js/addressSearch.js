function doSearch()
{
  let zipcodeElement = document.querySelector("#zipcode");
  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeElement.value}`).then(
      function(response) {
        return response.json();
      }
  ).then(
      function(json) {
        let answerHtml = "";
        answerHtml = `${json.results[0].address1},
      ${json.results[0].address2},
      ${json.results[0].address3}`;
        document.querySelector("#answer").innerHTML = answerHtml;
      }
  )
}

function bookSearch()
{
  let bookElement = document.querySelector("#keyword");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookElement.value}`).then(
      function(response){
        return response.json();
      }
  ).then(
      function(json) {
        let answerHtml = "";
        console.log(json.items[0]);
        //document.querySelector("#answer2").innerHTML = answerHtml;
      }
  )
  {

  }
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