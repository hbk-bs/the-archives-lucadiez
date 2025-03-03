// relative Koordinaten und Größen
const x = (n) => width * n;
const y = (n) => height * n;
//const s = (n) => height /2;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(400, 400);
	colorMode(HSL, 360, 100, 100, 100); // Farbsystem
	rectMode(CENTER); // Koordinaten in die Mitte vom rect
	const PrimaryColor = color(336, 83, 88); // Hauptfarbe
	background("#efefef"); // Hintergrundfarbe
	noStroke();

	fill(0, 0, 0, 20);
	rect(x(0.525), y(0.525), s(0.6), s(0.6));

	fill(PrimaryColor);
	rect(x(0.5), y(0.5), s(0.6), s(0.6));
}

// save images

function keyPressed() {
	if (key === "s") {
		save("my-image.png");
	}
}
