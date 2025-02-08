let speed = 0;
let scaleFactor = 100;
let xOffset = 200;
let yOffset = 200;

function setup(){
  const canvas = createCanvas(400,400);
  canvas.parent("sketch");
  angleMode(DEGREES)
}

function draw() {
    background("black")
    noStroke()
    circle (200, 200, 100)

    const x = cos(speed%360) * scaleFactor + xOffset;
    const y = sin(speed%360) * scaleFactor + yOffset;
    ellipse(x, y ,50 ,50)
  
  // animation speed
  speed += 2
}
