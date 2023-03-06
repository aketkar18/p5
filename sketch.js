let homePageImg, menuImg, moveVid, currentPage;
let dragStartY = 0;
let dragEndY = 0;

function preload() {
  homePageImg = loadImage('assets/homepage.png');
  menuImg = loadImage('assets/menu.png');
  moveVid = createVideo('assets/menu.mp4');
}

function setup() {
  createCanvas(1500, 3000);
  currentPage = "home";
  image(homePageImg, 0, 0);
  // moveVid.hide();
}

function draw() {
  background(0);
  if (currentPage === "home") {
    image(homePageImg, 0, 0);
  } else if (currentPage === "menu") {
    image(menuImg, 0, 0);
  }
}

function mousePressed() {
  dragStartY = mouseY;
  // dragEndY = mouseY;
}

function mouseDragged() {
  dragEndY = mouseY;
}

function mouseReleased() {
  if (dragStartY > dragEndY && dragStartY - dragEndY > 100 && currentPage === "home") {
    moveVid.play();
    // currentPage = "menu";
  }
}
