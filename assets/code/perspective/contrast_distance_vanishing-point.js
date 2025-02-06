// relative Koordinaten und Größen
const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(400, 400);
	colorMode(HSL, 360, 100, 100, 100); // Farbmodus
	rectMode(CENTER); // Koordinaten in der Mitte des rect
	background(0, 0, 0, 100); // Hintergrundfarbe
	fill(0, 100, 100, 100); // Füllfarbe
	noStroke();
	rect(x(0.5), y(0.5), s(0.05), s(0.05));
}

// save images

function keyPressed() {
	if (key === "s") {
		save("my-image.png");
	}
}