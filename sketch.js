let boxImg;          
let prizeImgs = []; 
let grid = [];       
let rows = 3;
let cols = 3;
let w = 156;
let h = 169;
let foundSpecial = false;

function preload() {
  boxImg = loadImage("cover.jpg"); 
  for (let i = 0; i < 9; i++) {
    prizeImgs[i] = loadImage("img" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(700, 700);

  for (let x = 50; x <= width - 180; x += 220) {
    for (let y = 100; y <= 500; y += 190) {
      grid.push({
        x: x,
        y: y,
        cover: true, 
        prize: random(prizeImgs) 
      });
    }
  }
}

function draw() {
  background(179, 230, 255);
  
  textSize(28);
  textAlign(CENTER);
  fill(50);
  text("Choose and open your Blind Boxes", width/2, 40);

  for (let cell of grid) {
    if (cell.cover) {
      image(boxImg, cell.x, cell.y, w, h); 
    } else {
      image(cell.prize, cell.x, cell.y, w, h); 
    }
  }
  
  for (let cell of grid) {
    if (cell.cover) {
      image(boxImg, cell.x, cell.y, w, h); 
    } else {
      image(cell.prize, cell.x, cell.y, w, h); 
      if (cell.prize === prizeImgs[8]) {
        foundSpecial = true;
      }
    }
  }

  if (foundSpecial) {
    fill(200, 0, 0);
    textSize(32);
    text("You found the SPECIAL one!", width/2, 80);
  }

}

function mousePressed() {
  for (let cell of grid) {
    if (
      mouseX > cell.x && mouseX < cell.x + w &&
      mouseY > cell.y && mouseY < cell.y + h
    ) {
      cell.cover = false;
    }
  }
}
