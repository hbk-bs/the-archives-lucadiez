class line {
	x;
	y;
	startX;
	startY;
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
		this.startX = _x;
		this.startY = _y;
	}
	display() {
		circle(this.x, this.y, 2);
	}
	update() {
		this.x = this.x + 1;
		this.y = this.y + random(-1, 2);
	}
}

class line2 {
	x;
	y;
	startX;
	startY;
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
		this.startX = _x;
		this.startY = _y;
	}
	display() {
		circle(this.x, this.y, 2);
	}
	update() {
		this.x = this.x + 1;
		this.y = this.y + random(-2, 1);
	}
}

let widthfromrect = 0;
const lines = [];
function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	background("black");
	noStroke();
	for (y = 0; y < width / 2; y += 20) {
		const p = new line(0, y);
		lines.push(p);
	}
	for (y = width / 2; y < width + 1; y += 20) {
		const p = new line2(0, y);
		lines.push(p);
	}
}
function draw() {
	for (let i = 0; i < lines.length; i++) {
		const oneLine = lines[i];
		oneLine.display();
		oneLine.update();

		if (oneLine.x >= width) {
			fill("black");
			rect(0, 0, widthfromrect, height);
			widthfromrect = widthfromrect + 401;

			if (widthfromrect >= width) {
				fill("white");
				oneLine.x = oneLine.startX;
				oneLine.y = oneLine.startY;
			}
		}
	}
}
