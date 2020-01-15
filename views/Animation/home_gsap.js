// -=-=-=-=-=-=-=-=-=-=
// ==== To start my functions in my js ====
// -=-=-=-=-=-=-=-=-=-=

document.addEventListener("DOMContentLoaded", function () {

  // gsap.from("#box1", {
  //   duration: 1.7,
  //   opacity: 0.01,
  //   scale: 0.01,
  //   // delay: 10.7,
  //   // rotation: 360,
  //   x: 1000,
  //   y: 0,


  // });





  //WITH Timelines (cleaner, more versatile)
  var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  tl.from("#box1", { opacity: 0, x: 1000, duration: .3 });
  tl.from("#box2", { opacity: 0, x: 1000, duration: .3 });
  tl.from("#box3", { opacity: 0, x: 1000, duration: .3 });
  tl.from("#box4", { opacity: 0, x: 1000, duration: .3 });
  tl.from("#box5", { opacity: 0, x: 1000, duration: .3 });
  tl.from("#box6", { opacity: 0, x: 1000, duration: .3 });
  tl.from("#box7", { opacity: 0, x: 1000, duration: .3 });







});  