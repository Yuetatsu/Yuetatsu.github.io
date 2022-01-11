let modal = document.querySelector(".p-menuModal");

let titles = document.querySelectorAll(".title");

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
  let mt = document.querySelector(".menu-top");
  let mc = document.querySelector(".menu-center");
  let mb = document.querySelector(".menu-bottom");

  // メニューアイコンアニメーション
  mt.classList.add("m-t-anime");
  mc.classList.add("m-c-anime");
  mb.classList.add("m-b-anime");
  // 以下、モーダル表示アニメーション用
  if(modal.classList.contains("is-hidden")){
    modal.classList.remove("is-hidden");
  }else{
    modal.classList.add("closing");
  }

  // アニメーション再生方向の指定
  if(modal.classList.contains("closing")){
    modal.style.animationDirection = "reverse";
    mt.style.animationDirection = "reverse";
    mc.style.animationDirection = "reverse";
    mb.style.animationDirection = "reverse";
  }else{
    modal.style.animationDirection = "normal";
    mt.style.animationDirection = "normal";
    mc.style.animationDirection = "normal";
    mb.style.animationDirection = "normal";
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

    titles.forEach((e)=>{
      e.classList.remove("-visible");
    });

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
    });

    titles.forEach((e)=>{
      e.classList.remove("-visible");
    });

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

  // タイトルアニメーション実行
  titles.forEach((e)=>{
    e.classList.add("-visible");
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

window.onload = function(){
  let eAnime= document.querySelector(".p-enter-animation");
  let upper = document.querySelector(".p-upper-block");
  let lower = document.querySelector(".p-lower-block");
  upper.classList.add("x-s-anime");
  upper.style.animationDirection = "reverse";
  lower.classList.add("x-s-l-anime");
  lower.style.animationDirection = "reverse";

  // 下部アニメーション終了時にトップアニメーションを隠す
  lower.addEventListener("animationend", ()=>{
    eAnime.style.zIndex = "-10";
  });
}