let ballY = 0;
let ballX;
let holeX, holeY, holeSize;

function setup() {
  createCanvas(400, 400);
  ballX = width / 2;
  holeX = width / 2;
  holeY = height - 50;
  holeSize = 50;
  holeSize2 = 20;
}

function draw() {
  background("black");

  // Zeichne das Loch
  fill("white");
  ellipse(holeX, holeY, holeSize, holeSize2);

  // Zeichne den Ball
  fill(255, 0, 0);
  noStroke();
  ellipse(ballX, ballY, 20, 20);

  // Bewege den Ball nach unten
  ballY += 4;
fill("black")
rect (0, holeY, 400, 400)

  fill("white")
  arc(holeX, holeY, 50, 30, 0, PI, PIE);

  // Wenn der Ball das Loch erreicht hat, setze ihn zurück
  if (ballY > holeY+50) {
    ballY = 0;
  }
}
