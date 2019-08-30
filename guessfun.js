//********* Game 1 ***********
var no=Math.floor((Math.random() * 10) + 1);
let count=1;

console.log("random is:"+no)
function guessno(){
  console.log("count is:"+count)
  
  if(count==3)
  {
  document.getElementById("data").innerHTML ="Game over!!"
  }
  else{
  count++;
  var inpt1=document.getElementById("inpt1").value
    if(inpt1==no)
    document.getElementById("data").innerHTML ="correct"
    
   else
    document.getElementById("data").innerHTML ="is not correct"
  }

}

//********* Game 2***********

// define the canvas
var canvas = document.getElementById("mycanvas");
//creating the ctx variable to store the 2D rendering context
var ctx= canvas.getContext("2d"); 

var x=canvas.width/2;
var y=canvas.height-30;
var dx=5;
var dy=5;

//set the paddle key listener 
var rightPressed = false;
var leftPressed = false;

// set the paddle var.
var paddleHeight = 30;
var paddleWidth = 100;
var ballRadius = 10;
var paddleX = (canvas.width-paddleWidth) / 2;
var myRect = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
}


function ballFunction()
{
  ctx.beginPath();
  ctx.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x,y,20,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

// Draw the paddle
function paddleFunction() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}


function Shape(x, y, w, h, fill) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.fill = fill;
}
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballFunction();
  paddleFunction();
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx;
  }
  if(y + dy < ballRadius) {
      dy = -dy;
 

  } else if(y+dy>canvas.height-ballRadius){
  // of the ball reach the paddle, bounce back
    if (x>paddleX && x<paddleX+paddleWidth){
      dy=-dy;
    }
 // of the ball doesnt reach the bottun, fine 
    else{
    alert("Game over");
    document.location.reload();
    clearInterval(interval);
    }
  }
  
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
  }
  

  if (ctx) {
   
    myRect.push(new Shape(20, 20, 50, 25, "#333"));
    myRect.push(new Shape(80, 20, 50, 25, "#333"));
    myRect.push(new Shape(140, 20, 50, 25, "#333"));
    myRect.push(new Shape(200, 20, 50, 25, "#333"));
    myRect.push(new Shape(260, 20, 50, 25, "#333"));
    myRect.push(new Shape(320, 20, 50, 25, "#333"));
    myRect.push(new Shape(380, 20, 50, 25, "#333"));
    myRect.push(new Shape(440, 20, 50, 25, "#333"));

 
    for (var i in myRect) {
        oRec = myRect[i];
        ctx.fillStyle = oRec.fill;
        ctx.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);

    }

}
// trying here to hit the paddles 
for (var i=0;i< myRect.length;i++) {
var b= myRect[i];
if(x>b.x && x< b.x+ b.w && y> b.y && y< b.y+b.h)
dy=-dy;
console.log("you touched+"+ b)
}

    x += dx;
    y += dy; 
  
}
var interval = setInterval(draw, 10);


  
