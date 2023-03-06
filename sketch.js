let button, img;

function preload() {
  homePageImg = loadImage('assets/homepage.png');
  menuImg = loadImage('assets/menu.png');
}

function setup() {
  createCanvas(1500, 3000);
  loadHomePage();
}

function loadHomePage(){
  image(homePageImg, 0, 0, 450, 900);
}

