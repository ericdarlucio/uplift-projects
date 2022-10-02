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

// Pipe coordinates
let pipe = [];
pipe[0] = {
  x : cvs.width,
  y : 0
}

// Draw images
function draw() {

  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);  
    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
      });
    }

  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, bX, bY);
  bY += gravity;
  requestAnimationFrame(draw);
  
}

draw();


