let loadImg, homePageImg, menuImg, burritoImg, currentPage;
let touchStartY = 0;
let touchEndY = 0;
let burritoButton;

function preload() {
  loadImg = loadImage('assets/loading.png');
  homePageImg = loadImage('assets/homepage.png');
  menuImg = loadImage('assets/menu.png');
  burritoImg = loadImage('assets/chicken.png');
}

function setup() {
  createCanvas(1170, 2532);

  currentPage = "load";
  image(loadImg, 0, 0);
  setTimeout(hideLoadingImage, 2000);
}

function hideLoadingImage() {
  currentPage = "home";
  image(homePageImg, 0, 0);
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
}