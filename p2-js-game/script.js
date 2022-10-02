  // Get cvs
  const cvs = document.getElementById('canvas');

  // Get context
  const ctx = cvs.getContext('2d');

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
  fly.src = 'sound/fly.mp3';
  scor.src = 'sound/score.mp3';


  // Some variables
  let gap = 120;
  let constant = pipeNorth.height + gap;
  let bX = 10;
  let bY = 150;
  let gravity = 1;
  let score = 0;

  // On keydown and on click
  document.addEventListener('click', moveUp);
  function moveUp() {
    bY -= 20;
    fly.play();
  }

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

    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < pipe.length; i++) {
      ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
      ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);  
      pipe[i].x--;

      if (pipe[i].x == 70) {
        pipe.push({
          x : cvs.width,
          y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
        });
      }

      // Detect collision
      if ( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && ( bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height) {
        location.reload(); 
      }

      if (pipe[i].x == 10) {
        score++;
        scor.play();
      }

    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bX, bY);
    bY += gravity;

    ctx.fillStyle = '#000';
    ctx.font = '20px Verdana'
    ctx.fillText(`Score: ${score}`, 10, cvs.height -20);

    requestAnimationFrame(draw);
    
  }
   