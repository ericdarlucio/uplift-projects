// Get cvs
const cvs = document.getElementById('canvas');

// Get ctx
const ctx = cvs.getContext('2d');

// Load pre-game background
let openBg = new Image();
openBg.src = 'image/bg.png';
openBg.onload = function () {
  ctx.drawImage(openBg, 0, 0);
}  

// Load images and sounds  
let bg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
let fg = new Image();
let bird = new Image();
let fly = new Audio();
let scor = new Audio();

bg.src = "image/bg.png";
pipeNorth.src = "image/pipeNorth.png";
pipeSouth.src = "image/pipeSouth.png";
fg.src = "image/fg.png";
bird.src = "image/bird.png";
fly.src = 'sounds/fly.mp3';
scor.src = 'sounds/score.mp3';


// In-game variables
let gap = 100;
let constant = pipeNorth.height + gap;
let bX = 10;
let bY = 150;
let gravity = 1.2;
let score = 0;
let highscore = localStorage.getItem("highscore");

// Moveup control on keydown
document.addEventListener('keydown', moveUp);
function moveUp() {
  bY -= 20;
  fly.play();
}

// Pipe coordinates
let pipe = [];
pipe[0] = {
  x : cvs.width,
  y : 0
}

// Draw images
function draw() {

  ctx.drawImage(bg, 0, 0); // Draw in-game background image

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y); // Draw top obstacle
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);   // Draw bottom obstacle
    pipe[i].x--;

    // Create random pipe coordinates
    if (pipe[i].x == 70) {
      pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
      });
    }

    // Detect collision
    if ( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && ( bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height) {
      if (score > highscore) { // If current score is greater than high score
        location.reload(); 
        alert("Congratulations! You're the new highscore");
        return
      }else { // Otherwise
        location.reload(); 
        alert('Game Over');
        return
      }
    }

    if (pipe[i].x == 10) { // If pipe x-coordinate is at 10, increment score
      score++;
      scor.play();
    }    
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height); // Draw floor background
  ctx.drawImage(bird, bX, bY); // Draw main character
  bY += gravity;

  // Save highscore in local storage
  if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);      
      }
  }else {
      localStorage.setItem("highscore", score);
  }

  // Display your score and top score
  ctx.fillStyle = '#000';
  ctx.font = '20px Verdana'
  ctx.fillText(`Your score: ${score}`, 10, cvs.height - 20);
  ctx.fillText(`Top score: ${highscore}`, 10, cvs.height - 40);

  requestAnimationFrame(draw);
  
}

// Execute draw function if play button is clicked
const ready = document.getElementById('play'); 
ready.addEventListener('click', draw);