// ユーザー名を抽出して、返す
function getNames() {
  let nameArray = ["All"];
  // 読み込んだtweetsを走査し、名前を重複なしで抜き出す
  tweets.forEach(function(tweet) {
    if(!nameArray.includes(tweet.name))
      nameArray.push(tweet.name);
  });
  return nameArray;
}

// ユーザー名を表示する
function setSelector()
{
  let names = getNames();
  let selector =  document.querySelector("#selector");
  names.forEach(function(username) {
    selector.innerHTML += `<div id="${username}" onclick="setTweetBlock('${username}')">${username}</div>`
  });
}

// tweetブロック表示切替(各セレクタークリック時に実行)
function setTweetBlock(username) {
  // tweetブロック表示領域を取得して、中身を初期化
  let query = document.querySelector("#tweetBlocks");
  query.innerHTML = "";

  // tweetsを走査し、ユーザーネームが一致した場合はtweetブロックを生成する(Allの際は必ず生成する)
  tweets.forEach(function(tweet) {
    if(username === "All" || username === tweet.name) {
      query.innerHTML += addTweetBlock(tweet.name, tweet.message, tweet.tweetedAt, tweet.avatar);
    }
  });

  setSelectorColor(username);
}

// tweetのブロックを追加する
function addTweetBlock(name, message, time, image)
{
  // ツイートブロックを生成
  return `<hr><div class="tBlock"><img src="${image}"><div><b>${name}</b><i>　${time}</i><br><p>${message}</p></div></div>`;
}

// セレクターの背景色を変更する
function setSelectorColor(username) {
  let arr = getNames();
  arr.forEach(function(name) {
    let bg = document.getElementById(`${name}`);
    if(username === name)
      bg.style.backgroundColor = "gray";
    else
      bg.style.backgroundColor = "darkgray";
  });
}

// 自動生成オブジェクトに対する、Styleの設定
function styleInit() {
  // セレクターの角を丸める
  let query = document.getElementById("selector");
  query.firstElementChild.style.borderRadius = "10px 0px 0px 10px";
  query.lastElementChild.style.borderRadius = "0px 10px 10px 0px";

}

// セレクターの設置 & 初期表示(All) & スタイル初期化 を実行
setSelector();
setTweetBlock("All");
styleInit();