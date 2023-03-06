let loadImg, homePageImg, menuImg, burritoImg, chickenImg, doubleChickenImg, finalOrderImg, paymentImg, slideImg, scanImg, currentPage;
let touchStartY = 0;
let touchEndY = 0;
let xButton, burritoButton, chickenButton, doubleChickenButton, addToBagButton, continuePaymentButton;
let chickenClicked = false; 
let capture;

function preload() {
  loadImg = loadImage('assets/loading.png');
  homePageImg = loadImage('assets/homepage.png');
  menuImg = loadImage('assets/menu.png');
  burritoImg = loadImage('assets/burrito.png');
  chickenImg = loadImage('assets/chicken.png');
  doubleChickenImg = loadImage('assets/doublechicken.png');
  slideImg = loadImage('assets/slidemenu.png');
  finalOrderImg = loadImage('assets/noricenobeans.png');
  scanImg = loadImage('assets/scan.png');
  paymentImg = loadImage('assets/visa.png');
  
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
  capture.stop();
  capture.hide();
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
  } else if (currentPage === "doubleChicken") {
    image(doubleChickenImg, 0, 0);
  } else if (currentPage === "slidemenu") {
      image(slideImg, 0, 0);
  } else if (currentPage === "scan") {
    image(scanImg, 0, 0);
  } else if (currentPage === "finalOrder") {
    image(finalOrderImg, 0, 0);
  } else if (currentPage === "payment") {
    image(paymentImg, 0, 0);
  }
}

function touchStarted() {
  touchStartY = mouseY;
  touchEndY = mouseY;
  touchStartX = mouseX;
  touchEndX = mouseX;
}

function touchMoved() {
  touchEndY = mouseY;
  touchEndX = mouseX;
}

function touchEnded() {
  let swipeDistance = touchEndY - touchStartY;
  let swipeHorizontal = touchEndX - touchStartX;
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
  } else if( (chickenClicked && swipeHorizontal > 50 && currentPage == "chicken") ) {
    currentPage = "slidemenu";
    image(slideImg, 0, 0);
    doubleChickenButton = createButton('choose double chicken option');
    doubleChickenButton.position(515, 1400);
    doubleChickenButton.size(350, 200);
    doubleChickenButton.style('opacity', 0);
    doubleChickenButton.mousePressed(chooseDoubleChickenOption);
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
  chickenClicked = true;
}

function chooseDoubleChickenOption() {
  currentPage = "doubleChicken";
  image(doubleChickenImg, 0, 0);

  addToBagButton = createButton('add to bag button option');
  addToBagButton.position(100, 2200);
  addToBagButton.size(950, 250);
  addToBagButton.style('opacity', 0);
  addToBagButton.mousePressed(showFinalOrder);
}

function showFinalOrder() {
  currentPage = "finalOrder";
  image(finalOrderImg, 0, 0);

  paymentButton = createButton('continue to payment option');
  paymentButton.position(100, 2200);
  paymentButton.size(950, 250);
  paymentButton.style('opacity', 0);
  paymentButton.mousePressed(showPayment);

}

function showPayment() {
  currentPage = "payment";
  image(paymentImg, 0, 0);
}

function loadScanPage() {
  currentPage = "scan";
  scanButton.hide();
  capture = createCapture(VIDEO);
  capture.size(750, 750);
  capture.position(200, 600);
  xButton = createButton('X');
  xButton.position(800, 0);
  xButton.size(350, 350);
  xButton.style('opacity', 0);
  xButton.mousePressed(hideLoadingImage);
} 