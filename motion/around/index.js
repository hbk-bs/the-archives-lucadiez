let speed = 0;
let scaleFactor = 100;
let xOffset = 250;
let yOffset = 250;

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  angleMode(DEGREES)
}

function draw() {
    background("black")
    noStroke()
    circle (250, 250, 100)

    const x = cos(speed%360) * scaleFactor + xOffset;
    const y = sin(speed%360) * scaleFactor + yOffset;
    ellipse(x, y ,50 ,50)
  
  // animation speed
  speed += 2
}
