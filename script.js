var x = 200
var y = 200
var img1 

function preload()
{
  img1 = loadImage("earth1.png")
}

function setup() 
{
   createCanvas(400, 400);
   background(255)
}

function draw() 
{
   clock(150, 150, 2)
}

function clock(x, y, sc)
{
      image(img1, 55, 52)
   push()
      translate(x,y)
      scale(sc)
    push()
         strokeWeight(4)
         noFill()
         ellipse(0, 0, 100)
    pop()

      fill(190, 140)
      ellipse(0, 0, 96)
      push()
         strokeWeight(2)
         line(0, 0, 0, -28)
         line(0, 0, 20, 0)
      pop()
  fill(0)
  triangle(-2, -28, 2, -28, 0, -33)
  triangle(20, 2, 20, -2, 25, 0)
  textSize(70)
  textStyle(BOLD)
  textFont("Charter Black")
  text("S", 20, 50)
  fill(255, 217, 81, 200)
  textSize(65)
  text("S", 20, 48)
}
