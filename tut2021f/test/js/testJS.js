//let mb = document.querySelector(".main-body");

//let contents = document.querySelectorAll(".content");
//let cNum = 0;
//let animated = false;

// マウスホイール回転時に発火
//window.onwheel = (ev) => {
//  if(ev.deltaY < 0 && !animated && cNum > 0){
//    document.documentElement.style.setProperty("--s-h", `-${cNum * 100}vh`);
//    document.documentElement.style.setProperty("--e-h", `-${(cNum-1) * 100}vh`);
//    mb.classList.add("y-s-anime");
//    animated = true;
//    cNum--;
//    console.log(`cNum = ${cNum}`);
//  }else if(ev.deltaY > 0 && !animated && cNum < contents.length - 1){
//    document.documentElement.style.setProperty("--s-h", `-${cNum * 100}vh`);
//    document.documentElement.style.setProperty("--e-h", `-${(cNum+1) * 100}vh`);
//    mb.classList.add("y-s-anime");
//    animated = true;
//    cNum++;
//    console.log(`cNum = ${cNum}`);
//  }
//}

//mb.addEventListener("animationend", ()=>{
//  mb.classList.remove("y-s-anime");
//  mb.style.transform = `translateY(${cNum * -100}vh)`;
//  animated = false;
//});