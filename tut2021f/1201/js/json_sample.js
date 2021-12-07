fetch("https://morimorihoge.github.io/teu2021f/tweets.json").then(
    function(response) {
      return response.json();
    }
).then(
    function(json) {
      let answerHtml = "";
      json.forEach(function(tweet) {
        answerHtml += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerHtml;
    }
)