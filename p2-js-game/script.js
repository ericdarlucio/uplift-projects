// Create canvas element and attributes
const canvas = document.createElement('canvas');
canvas.width = '288';
canvas.height = '512';
canvas.id = 'cvs';
canvas.style.border = '1px solid black'

// Append canvas element to body
document.body.appendChild(canvas);

// Get context
const ctx = cvs.getContext('2d');

// Load images
let bg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
let fg = new Image();
let bird = new Image();

bg.src = "image/bg.png";
pipeNorth.src = "image/pipeNorth.png";
pipeSouth.src = "image/pipeSouth.png";
fg.src = "image/fg.png";
bird.src = "image/bird.png";

// Some variables
let gap = 85;
let constant = pipeNorth.height + gap;
let bX = 10;
let bY = 150;
let gravity = 1;

// On keydown
document.addEventListener('keydown', moveUp);
function moveUp() {
  bY -= 20;
}




// Draw images
function draw() {

  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(pipeNorth, 100, 0);
  ctx.drawImage(pipeSouth, 100, 0 + constant);
  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, bX, bY);
  bY += gravity;
  requestAnimationFrame(draw);
  
}

draw();


