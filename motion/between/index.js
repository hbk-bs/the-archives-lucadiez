let x;
let y;
let radius = 20;
let xSpeed;
let ySpeed;
let line1 = 90;
let line2 = 270;

function setup(){
  const canvas = createCanvas (360, 360) ;
  canvas.parent ("sketch");
  xSpeed = random (-5, 5);
  ySpeed = random (-5, 5);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background (0);
  stroke("white");
  strokeWeight(5);
  line (line1, 0, line1, 360);
  line (line2, 0, line2, 360);

  circle(x, y, radius);

x += xSpeed,
y += ySpeed;

if (x - radius / 2 < line1 + 5 || x + radius / 2 > line2 - 5) {
  xSpeed *= -1;
}

if (y > height - radius / 2 || y < radius / 2) {
  ySpeed *= -1;
}
}