let loadImg, homePageImg, menuImg, burritoImg, chickenImg, scanImg, currentPage;
let touchStartY = 0;
let touchEndY = 0;
let burritoButton, chickenButton;

function preload() {
  loadImg = loadImage('assets/loading.png');
  homePageImg = loadImage('assets/homepage.png');
  menuImg = loadImage('assets/menu.png');
  burritoImg = loadImage('assets/burrito.png');
  chickenImg = loadImage('assets/chicken.png');
  scanImg = loadImage('assets/scan.png');
}

function setup() {
  createCanvas(1170, 2532);

  currentPage = "load";
  image(loadImg, 0, 0);
  setTimeout(hideLoadingImage, 500);
}

function hideLoadingImage() {
  currentPage = "home";
  image(homePageImg, 0, 0);
  scanButton = createButton('Scan');
  scanButton.position(900, 2200);
  scanButton.size(200, 200);
  scanButton.style('opacity', 0);
  scanButton.mousePressed(loadScanPage);
}

function draw() {
  background(0);
  if (currentPage === "load") {
    image(loadImg, 0, 0);
  } else if (currentPage === "home") {
    image(homePageImg, 0, 0);
  } else if (currentPage === "menu") {
    image(menuImg, 0, 0);
  } else if (currentPage === "burrito") {
    image(burritoImg, 0, 0);
  } else if (currentPage === "chicken") {
    image(chickenImg, 0, 0);
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
    burritoButton.style('display', 'none');
  } else if (swipeDistance < -100 && currentPage === "home") {
    currentPage = "menu";
    image(menuImg, 0, 0);
    burritoButton = createButton('choose burrito option');
    burritoButton.position(575, 400);
    burritoButton.size(300, 100);
    burritoButton.style('opacity', 0);
    burritoButton.mousePressed(loadBurritoPage);
  }
}

function loadBurritoPage() {
  currentPage = "burrito";
  image(burritoImg, 0, 0);
  burritoButton.style('display', 'none');
  chickenButton = createButton('choose chicken option');
  chickenButton.position(715, 1400);
  chickenButton.size(350, 200);
  chickenButton.style('opacity', 0);
  chickenButton.mousePressed(chooseChickenOption);
}

function chooseChickenOption() {
  currentPage = "chicken";
  image(chickenImg, 0, 0);
}

function loadScanPage() {
  currentPage = "scan";
  scanButton.hide();
  let capture = createCapture(VIDEO);
  capture.size(750, 750);
  capture.position(200, 600);
} 