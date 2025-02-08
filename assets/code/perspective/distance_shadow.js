// relative Koordinaten und Größen
const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(600, 600);
	background("#efefef"); // Hintergrundfarbe
	colorMode(HSL, 360, 100, 100, 100); // Farbsystem
	const primaryColor = color(336, 83, 88); // Hauptfarbe

	noStroke();
	fill(primaryColor);
	ellipse(x(0.5), y(0.2), s(0.1), s(0.1)); // Ball

	fill(0, 0, 0, 25);
	ellipse(x(0.5), y(0.8), s(0.09), s(0.01)); // Schatten
}

// save images

function keyPressed() {
	if (key === "s") {
		save("my-image.png");
	}
}
