// -=-=-=-=-=-=-=-=-=-=
// ==== To start my functions in my js ====
// -=-=-=-=-=-=-=-=-=-=

document.addEventListener("DOMContentLoaded", function () {



  gsap.from("#box1", {
    duration: 1.7,
    opacity: 0.01,
    scale: 0.01,
    // delay: 10.7,
    // rotation: 360,
    x: 0,
    y: -1000,
    ease: "back.out(1.7)",


  });

  gsap.from("#opening", {
    duration: 1.7,
    opacity: 0.01,
    scale: 0.01,
    // delay: 10.7,
    // rotation: 360,
    x: -1000,
    y: 0,
    ease: "back.out(1.7)",


  });



});  