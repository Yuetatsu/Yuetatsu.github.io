/*----- Global Variables -----*/

let modal = document.querySelector(".p-menuModal");       // モーダル
let titles = document.querySelectorAll(".title");         // テキストアニメーションのリスト

let menuBtn = document.querySelector(".p-menuIcon");      // メニューアイコン

// メニューアイコン(3本の棒)
let mort = document.querySelector(".menu-top");           // 上
let morc = document.querySelector(".menu-center");        // 中
let morb = document.querySelector(".menu-bottom");        // 下

let mb = document.querySelector(".p-main-body");          // メインコンテンツ描画用変数

let contents = document.querySelectorAll(".p-content");   // メインコンテンツ(Recently Works)のリスト
let cNum = 0;                                                     // 表示中コンテンツナンバー
let animated = false;                                             // アニメーション再生フラグ

let imgs = document.querySelectorAll(".p-image-body");    // 画像のリスト
let showImg = true;                                               // 画像表示フラグ (style設定時に利用)

let movePage = false;                                             // ページ遷移フラグ
let pl;                                                           // ページ遷移

/*----- Methods -----*/

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

// ページロードが終了した後に実行
window.onload = function(){
  movePage = false;

  mb.addEventListener("animationend", ()=>{
    mb.classList.remove("y-s-anime");
    imgs.forEach((e)=>{
      showImg = true;
      e.style.animationDirection = "normal";
      e.classList.add("img-show-anime");
    });

    // テキストアニメーション実行
    titles.forEach((e)=>{
      e.classList.add("-visible");
    });

    mb.style.transform = `translateY(${cNum * -100}vh)`;
    animated = false;
    console.log("mb EventListener");
  });

// コンテンツイメージアニメーション
  imgs.forEach((e)=>{
    e.addEventListener("animationend", (event)=>{
      event.stopPropagation();
      if(showImg)
        e.style.opacity = "1";
      else
        e.style.opacity = "0";
      e.classList.remove("img-show-anime");
    });
  });


  // 表示時のアニメーション再生
  let eAnime= document.querySelector(".p-enter-animation");
  let upper = document.querySelector(".p-upper-block");
  let lower = document.querySelector(".p-lower-block");

  upper.classList.add("x-s-anime");
  upper.style.animationDirection = "reverse";
  lower.classList.add("x-s-l-anime");
  lower.style.animationDirection = "reverse";

  // 下部アニメーション終了時にトップアニメーションを隠す
  lower.addEventListener("animationend", ()=>{
    if(!movePage)
      eAnime.style.zIndex = "-10";
    upper.classList.remove("x-s-anime");
    lower.classList.remove("x-s-l-anime");
  });

  mort.addEventListener("animationend", ()=>{
    if(mort.style.animationDirection === "normal")
      mort.style.transform = "rotate(45deg) translate(11.25px, 11.25px)";
    else
      mort.style.transform = "rotate(0deg) translate(0, 0)";

    mort.classList.remove("m-t-anime");
  });

  morc.addEventListener("animationend", ()=>{
    if(morc.style.animationDirection === "normal")
      morc.style.transform = "scaleX(0)";
    else
      morc.style.transform = "scaleX(1)";

    morc.classList.remove("m-c-anime");
  });

  morb.addEventListener("animationend", ()=>{
    if(morb.style.animationDirection === "normal")
      morb.style.transform = "rotate(-45deg) translate(11.25px, -11.25px)";
    else
      morb.style.transform = "rotate(0deg) translate(0, 0)";

    morb.classList.remove("m-b-anime");
  });

  // modalを表示&非表示
  menuBtn.addEventListener("click",()=>{
    morc.classList.remove("m-c-anime");
    morb.classList.remove("m-b-anime");

    // モーダル表示アニメーション用
    if(modal.classList.contains("is-hidden")){
      modal.classList.remove("is-hidden");
    }else{
      modal.classList.add("closing");
    }

    // アニメーション再生方向の指定
    if(modal.classList.contains("closing")){
      modal.style.animationDirection = "reverse";
      mort.style.animationDirection = "reverse";
      morc.style.animationDirection = "reverse";
      morb.style.animationDirection = "reverse";
    }else{
      modal.style.animationDirection = "normal";
      mort.style.animationDirection = "normal";
      morc.style.animationDirection = "normal";
      morb.style.animationDirection = "normal";
    }

    // アニメーション再生
    modal.classList.add("x-s-anime");
    mort.classList.add("m-t-anime");
    morc.classList.add("m-c-anime");
    morb.classList.add("m-b-anime");
  });

  // モーダルアニメーション終了時のDOMイベント
  modal.addEventListener("animationend", ()=>{
    // 非表示状態を解除
    if(modal.classList.contains("is-hidden")){
      modal.classList.remove("is-hidden");
    }

    // モーダルを非表示状態に遷移
    if(modal.classList.contains("closing")){
      modal.classList.add("is-hidden");
      modal.classList.remove("closing");
    }

    // アニメーションを解除
    modal.classList.remove("x-s-anime");
  });

  // ページ間遷移
  let links = document.querySelectorAll("a");

  links.forEach((link)=>{
    let eAnime= document.querySelector(".p-enter-animation");
    let upper = document.querySelector(".p-upper-block");
    let lower = document.querySelector(".p-lower-block");

    link.addEventListener("click", (e)=>{
      e.preventDefault();
      movePage = true;
      pl = link.getAttribute("href");
      eAnime.style.zIndex = "200";
      upper.classList.remove("x-s-anime");
      upper.classList.add("x-s-anime");
      upper.style.animationDirection = "normal";
      lower.classList.add("x-s-l-anime");
      lower.style.animationDirection = "normal";
    });
  });

  eAnime.addEventListener("animationend", ()=>{
    if(movePage){
      location.href = pl;
    }
  });
}
