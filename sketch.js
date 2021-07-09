var btn_red
var btn_green
var r=0
var g=0
var b=255
function setup() {
  createCanvas(400,400);
  
  btn_red=createButton("RED");
  btn_red.position(250,50)
  btn_red.mousePressed(red_bg);
  
  
  btn_green=createButton("GREEN");
  btn_green.position(250,250);
  btn_green.mousePressed(green_bg)
}

function draw() 
{
  background(r,g,b);
  if (keyDown(UP_ARROW)){
    background("red")
  }

  if (keyDown(DOWN_ARROW)){
    background("green")
  }
  if (keyDown(LEFT_ARROW)){
    background("orange")
  }
  if (keyDown(RIGHT_ARROW)){
    background("purple")
  }
}
function red_bg(){
  r=255;
  g=0;
  b=0;
}
function green_bg()
  {
  r=0
  g=255
  b=0
  }




