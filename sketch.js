let button, img;

function preload() {
  img = loadImage('assets/IMG_0967.jpeg');
}

function setup() {
  createCanvas(1000, 1000);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadCamera);
}

function loadCamera(){
  image(img, 0, 0);
}
