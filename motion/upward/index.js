let circlePositions = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background("black");
  
  for (let i = 0; i < circlePositions.length; i++) {
    let positions = circlePositions[i];
    
    fill("white");
    ellipse(positions.x, positions.y, positions.size);
    positions.y -= 2;
  }
  
}

function mouseDragged() {
  let randomSize = Math.random() * (40 - 10) + 10;
  circlePositions.push({
    x: mouseX,
    y: mouseY,
    size: randomSize,
  });
}

  function mousePressed() {
    let randomSize = Math.random() * (40 - 10) + 10;
    circlePositions.push({
      x: mouseX,
      y: mouseY,
      size: randomSize,
    });
}
