/*----- Global Variables -----*/

let modal = document.querySelector(".p-menuModal");       // モーダル
let titles = document.querySelectorAll(".title");         // テキストアニメーションのリスト

let menuBtn = document.querySelector(".p-menuIcon");      // メニューアイコン

// メニューアイコン(3本の棒)
let mor_t = document.querySelector(".menu-top");           // 上
let mor_c = document.querySelector(".menu-center");        // 中
let mor_b = document.querySelector(".menu-bottom");        // 下

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


  // 閲覧開始時のアニメーション再生
  let eAnime= document.querySelector(".p-enter-animation");   // 閲覧開始時のアニメーションのBody
  let upper = document.querySelector(".p-upper-block");       // 上部
  let lower = document.querySelector(".p-lower-block");       // 下部

  upper.classList.add("x-s-anime");
  upper.style.animationDirection = "reverse";
  lower.classList.add("x-s-l-anime");
  lower.style.animationDirection = "reverse";

  // 下部アニメーション終了時にeAnimeを背面に隠す(ページ遷移時に再利用するため)
  lower.addEventListener("animationend", ()=>{
    if(!movePage)
      eAnime.style.zIndex = "-10";
    upper.classList.remove("x-s-anime");
    lower.classList.remove("x-s-l-anime");
  });

  // メニューアイコンのアニメーション終了時のイベント(上)
  mor_t.addEventListener("animationend", ()=>{
    if(mor_t.style.animationDirection === "normal")
      mor_t.style.transform = "rotate(45deg) translate(11.25px, 11.25px)";
    else
      mor_t.style.transform = "rotate(0deg) translate(0, 0)";
    mor_t.classList.remove("m-t-anime");
  });

  // メニューアイコンのアニメーション終了時のイベント(中)
  mor_c.addEventListener("animationend", ()=>{
    if(mor_c.style.animationDirection === "normal")
      mor_c.style.transform = "scaleX(0)";
    else
      mor_c.style.transform = "scaleX(1)";
    mor_c.classList.remove("m-c-anime");
  });

  // メニューアイコンのアニメーション終了時のイベント(下)
  mor_b.addEventListener("animationend", ()=>{
    if(mor_b.style.animationDirection === "normal")
      mor_b.style.transform = "rotate(-45deg) translate(11.25px, -11.25px)";
    else
      mor_b.style.transform = "rotate(0deg) translate(0, 0)";
    mor_b.classList.remove("m-b-anime");
  });

  // モーダルを表示&非表示にするイベント
  menuBtn.addEventListener("click",()=>{
    // モーダルを表示するか非表示にするか判定
    if(modal.classList.contains("is-hidden")){
      modal.classList.remove("is-hidden");
    }else{
      modal.classList.add("closing");
    }

    // アニメーション再生方向の指定
    if(modal.classList.contains("closing")){
      modal.style.animationDirection = "reverse";
      mor_t.style.animationDirection = "reverse";
      mor_c.style.animationDirection = "reverse";
      mor_b.style.animationDirection = "reverse";
    }else{
      modal.style.animationDirection = "normal";
      mor_t.style.animationDirection = "normal";
      mor_c.style.animationDirection = "normal";
      mor_b.style.animationDirection = "normal";
    }

    // アニメーション再生
    modal.classList.add("x-s-anime");
    mor_t.classList.add("m-t-anime");
    mor_c.classList.add("m-c-anime");
    mor_b.classList.add("m-b-anime");
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

  let links = document.querySelectorAll("a");   // "a"タグ(ページ遷移の要素)のリスト

  // 各aタグにページ遷移アニメーションを発火するためのイベントを追加
  links.forEach((link)=>{
    let eAnime= document.querySelector(".p-enter-animation");
    let upper = document.querySelector(".p-upper-block");
    let lower = document.querySelector(".p-lower-block");

    // ページ遷移アニメーション再生用イベント(href="#"は除外)
    link.addEventListener("click", (e)=>{
      // href = "#" の際はアニメーションを行わない
      if(link.getAttribute("href") !== "#"){
        e.preventDefault(); // 勝手に遷移する機能をオフ
        movePage = true;
        pl = link.getAttribute("href");
        eAnime.style.zIndex = "200";
        upper.classList.remove("x-s-anime");
        upper.classList.add("x-s-anime");
        upper.style.animationDirection = "normal";
        lower.classList.add("x-s-l-anime");
        lower.style.animationDirection = "normal";
      }
    });
  });

  // アニメーションが終了した際にページ遷移を実行
  eAnime.addEventListener("animationend", ()=>{
    if(movePage)
      location.href = pl;
  });
}
