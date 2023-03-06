let homePageImg, menuImg, currentPage;
let touchStartY = 0;
let touchEndY = 0;

function preload() {
  homePageImg = loadImage('assets/homepage.png');
  menuImg = loadImage('assets/menu.png');
}

function setup() {
  createCanvas(1500, 3000);
  currentPage = "home";
  image(homePageImg, 0, 0);
}

function draw() {
  background(0);
  if (currentPage === "home") {
    image(homePageImg, 0, 0);
  } else if (currentPage === "menu") {
    image(menuImg, 0, 0);
  }
}

function touchStarted() {
  touchStartY = mouseY;
  touchEndY = mouseY;
}

function touchMoved() {
  touchEndY = mouseY;
}

function touchEnded() {
  let swipeDistance = touchEndY - touchStartY;
  if (swipeDistance > 100 && currentPage === "menu") {
    currentPage = "home";
    image(homePageImg, 0, 0);
  } else if (swipeDistance < -100 && currentPage === "home") {
    currentPage = "menu";
    image(menuImg, 0, 0);
  }
}
