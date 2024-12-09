class Particle {
	x;
	y;
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
	}
	display() {
		circle(this.x, this.y, 2);
	}
	update() {
		this.x = this.x + 1;
		this.y = this.y + random(-1, 2);
	}
}

class Particle2 {
	x;
	y;
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
	}
	display() {
		circle(this.x, this.y, 2);
	}
	update() {
		this.x = this.x + 1;
		this.y = this.y + random(-2, 1);
	}
}
const particles = [];
function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	background("black")
	noStroke();
	for (y = 0; y < width/2; y += 20) {
		const p = new Particle(0, y);
		particles.push(p);
	}
	for (y = width/2; y < width+1; y += 20) {
		const p = new Particle2(0, y);
		particles.push(p);
	}
}
function draw() {
	for (let i = 0; i < particles.length; i++) {
		const oneParticle = particles[i];
		oneParticle.display();
		oneParticle.update();
	}
}