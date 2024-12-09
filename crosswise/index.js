class Particle {
	x;
	y;
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
	}
	display() {
		circle(this.x, this.y, 10);
	}
	update() {
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(10, 5);
	}
}

const particles = [];
function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	for (x = 0; x < width; x += 2) {
		const p = new Particle(x, 0);
		particles.push(p);
	}
}

function draw() {
  background(0)
	for (let i = 0; i < particles.length; i++) {
		const oneParticle = particles[i];
		oneParticle.display();
		oneParticle.update();
	}

  if(frameCount > 10){
    noLoop();

  }
}

function mouseDragged() {}