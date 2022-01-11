let modal = document.querySelector(".p-menuModal");

// メニューアイコン
let menuBtn = document.querySelector(".p-menuIcon");

// モーダルアニメーション終了時のDOMイベント
modal.addEventListener("animationend", ()=>{
  if(modal.classList.contains("is-hidden")){
    modal.classList.remove("is-hidden");
  }

  if(modal.classList.contains("closing")){
    modal.classList.add("is-hidden");
    modal.classList.remove("closing");
  }

  modal.classList.remove("x-s-anime");
});

// modalを表示&非表示
menuBtn.onclick = () => {
  if(modal.classList.contains("is-hidden")){
    modal.classList.remove("is-hidden");
  }else{
    modal.classList.add("closing");
  }

  // アニメーション再生方向の指定
  if(modal.classList.contains("closing")){
    modal.style.animationDirection = "reverse";
  }else{
    modal.style.animationDirection = "normal";
  }

  // アニメーション再生
  modal.classList.add("x-s-anime");
}


// メインコンテンツ描画用変数
let mb = document.querySelector(".p-main-body");

let contents = document.querySelectorAll(".p-content");
let cNum = 0;           // 表示中コンテンツナンバー
let animated = false;   // アニメーション再生フラグ

let imgs = document.querySelectorAll(".p-image-body");
let showImg = true;


// マウスホイール回転時に発火
window.onwheel = (ev) => {
  if(ev.deltaY < 0 && !animated && cNum > 0){
    document.documentElement.style.setProperty("--s-h", `-${cNum * 100}vh`);
    document.documentElement.style.setProperty("--e-h", `-${(cNum-1) * 100}vh`);
    mb.classList.add("y-s-anime");
    animated = true;

    imgs.forEach((e)=>{
      showImg = false;
      e.style.animationDirection = "reverse";
      e.classList.add("img-show-anime");
    })

    cNum--;
    console.log(`cNum = ${cNum}`);
  }else if(ev.deltaY > 0 && !animated && cNum < contents.length - 1){
    document.documentElement.style.setProperty("--s-h", `-${cNum * 100}vh`);
    document.documentElement.style.setProperty("--e-h", `-${(cNum+1) * 100}vh`);
    mb.classList.add("y-s-anime");
    animated = true;

    imgs.forEach((e)=>{
      showImg = false;
      e.style.animationDirection = "reverse";
      e.classList.add("img-show-anime");
    })

    cNum++;
    console.log(`cNum = ${cNum}`);
  }
}

mb.addEventListener("animationend", ()=>{
  mb.classList.remove("y-s-anime");
  imgs.forEach((e)=>{
    showImg = true;
    e.style.animationDirection = "normal";
    e.classList.add("img-show-anime");
  });
  mb.style.transform = `translateY(${cNum * -100}vh)`;
  animated = false;
  console.log("mb EventListener");
});

// コンテンツイメージアニメーション
imgs.forEach((e)=>{
  e.addEventListener("animationend", ()=>{
    this.event.stopPropagation();
    if(showImg)
      e.style.opacity = "1";
    else
      e.style.opacity = "0";
    e.classList.remove("img-show-anime");
  });
});