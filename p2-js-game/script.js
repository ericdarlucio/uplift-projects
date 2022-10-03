// Get cvs
const cvs = document.getElementById('canvas');

// Get ctx
const ctx = cvs.getContext('2d');

// Load images and sounds  
let altBackground = new Image();
let background = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
let floorBackground = new Image();
let programmer = new Image();
let fly = new Audio();
let scor = new Audio();

altBackground.src = 'image/alt-bg.png';
background.src = "image/bg.png";
pipeNorth.src = "image/pipeNorth.png";
pipeSouth.src = "image/pipeSouth.png";
floorBackground.src = "image/fg.png";
programmer.src = "image/bird.png";
fly.src = 'sounds/fly.mp3';
scor.src = 'sounds/score.mp3';

// Load pre-game background
altBackground.onload = function () {
  ctx.drawImage(altBackground, 0, 0); // Draw background
}

// In-game variables
let gap = 100;
let constant = 242 + 100; // Changed from adding pipeNorth.height and gap variables to pure numbers to remove the closed pipe bug
let bX = 10;
let bY = 150;
let gravity = 1.2;
let score = 0;

// Initialize highscore on the localStorage
if (localStorage.getItem('highscore') == null) {
  localStorage.setItem("highscore", score);
} 

// Get highscore on the localStorage
let highscore = localStorage.getItem("highscore");

// Moveup control on keydown
document.addEventListener('keydown', moveUp);
function moveUp() {
  bY -= 20;
  fly.play();
}

// Create pipe array and initialize pipe coordinates
let pipe = [];
pipe[0] = {
  x : cvs.width,
  y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height // This needs to be negative for the top pipe to move up
}


// Draw images
function draw() {

  ctx.drawImage(background, 0, 0); // Draw in-game background image

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y); // Draw top obstacle
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);   // Draw bottom obstacle
    pipe[i].x--;

    // Create new pipe if first pipe is at 70px x-coordinate
    if (pipe[i].x == 70) {
      pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height // This needs to be negative for the top pipe to move up
      });
    }

    // Detect collision
    if ( bX + programmer.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && ( bY <= pipe[i].y + pipeNorth.height || bY + programmer.height >= pipe[i].y + constant) || bY + programmer.height >= cvs.height - floorBackground.height) {
      
      if (score > highscore) { // If current score is greater than high score
        location.reload(); 
        alert("Congratulations! You're the new highscore");
        return
      }else { // If current score is less than high score
        location.reload(); 
        alert('Game Over');
        return
      }
    }

    // If pipe x-coordinate is at 10, increment score
    if (pipe[i].x == 10) {
      score++;
      scor.play();
    }    
  }

  ctx.drawImage(floorBackground, 0, cvs.height - floorBackground.height); // Draw floor background
  ctx.drawImage(programmer, bX, bY); // Draw main character
  bY += gravity; // Adds to y coordinate for gravity pull effect

  // Save highscore in local storage
  if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);      
      }
  }

  // Display your score and top score
  ctx.fillStyle = 'black';
  ctx.font = '20px Verdana'
  ctx.fillText(`Your Score: ${score}`, 5, cvs.height - 85);
  ctx.fillStyle = 'white';
  ctx.font = '20px Verdana'
  ctx.fillText(`Top Score: ${highscore}`, cvs.width/2, cvs.height - 10);

  requestAnimationFrame(draw);
}

// Executes draw function and show hidden buttons
function play() {
  draw();
  document.getElementById('play').style.display = 'none';
  document.getElementById('restart').style.display = 'inline';
  document.getElementById('exit').style.display = 'inline';
}

// Restarts the game
function restart() {
  if (confirm('Are you sure you want to restart the game?')) {
    location.reload();
  }}

// Closes the game
function exit() {
  if (confirm('Are you sure you want to close the game?')) {
    window.close();
  }
}