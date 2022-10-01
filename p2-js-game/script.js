// Create canvas element
const canvas = document.createElement('canvas');
canvas.width = '288';
canvas.height = '512';
canvas.id = 'canvas';
canvas.style.border = '1px solid black'
// Append canvas element to body
document.body.appendChild(canvas);


// Get context
const context = canvas.getContext('2d');

function draw() {

  let bg = new Image();
  bg.src = "image/bg.png";
  bg.onload = function() {
    context.drawImage(bg, 0, 0);
  }

  let pipeNorth = new Image();
  pipeNorth.src = "image/pipeNorth.png";
  pipeNorth.onload = function() {
    context.drawImage(pipeNorth, 0, 0);
  }

  let pipeSouth = new Image();
  pipeSouth.src = "image/pipeSouth.png";
  pipeSouth.onload = function() {
    context.drawImage(pipeSouth, 0, 300);
  }

  let bird = new Image();
  bird.src = "image/bird.png";
  bird.onload = function() {
    context.drawImage(bird, 0, 260);
  }

  let fg = new Image();
  fg.src = "image/fg.png";
  fg.onload = function() {
    context.drawImage(fg, 0, 400);
  }

}

draw();


