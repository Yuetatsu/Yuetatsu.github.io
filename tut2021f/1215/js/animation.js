function startAnimation() {
  anime({
    targets: "#animation-box",
    translateX: 400,
    translateY: 150,
    rotate: 315,
    scale: 2,
    backgroundColor: "#F00",
    borderRadius: ["0%","25%"],
    direction: "alternate",
    loop: true,
    easing: "easeInBounce"
  })
}