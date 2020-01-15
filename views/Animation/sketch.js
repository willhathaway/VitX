
// function preload() {
//   image1 = loadImage("./svg/003-heart.svg");
// }

function setup() {
  let canvas = createCanvas(315, 200, WEBGL);

  canvas.parent('#sketch1');

  // image1(img, 0, 0);


}

function draw() {
  background('brown');

  clear();

  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  rotateZ(millis() / 4000);
  translate(p5.Vector.fromAngle(millis() / 2000, 40));
  // fill();
  // noStroke();
  sphere(40, 200, 300);





}