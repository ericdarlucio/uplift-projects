// Create canvas element
const canvas = document.createElement('canvas');
canvas.width = '288';
canvas.height = '512';
canvas.id = 'cvs';
canvas.style.border = '1px solid black'
// Append canvas element to body
document.body.appendChild(canvas);

// Some variables
let bg = new Image();
bg.src = "image/bg.png";
let pipeNorth = new Image();
pipeNorth.src = "image/pipeNorth.png";
let pipeSouth = new Image();
pipeSouth.src = "image/pipeSouth.png";
let fg = new Image();
fg.src = "image/fg.png";
let bird = new Image();
bird.src = "image/bird.png";
let gap = 85;
let constant = pipeNorth.height + gap;
let bX = 10;
let bY = 150;
let gravity = 1;

// Get context
const ctx = cvs.getContext('2d');

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


