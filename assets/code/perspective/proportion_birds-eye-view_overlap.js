// relative Koordinaten und Größen
const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(400, 400);
	colorMode(HSL, 360, 100, 100, 100); // Farbsystem
	const primaryColor = color(336, 83, 88); // Hauptfarbe
	background("#efefef"); // Hintergrundfarbe
	noStroke();

	// Berechnet die Größen des Kreises
	const radius1 = s(0.5);
	const radius2 = radius1 * 0.25;

	push();
	translate(width / 2, height / 2); //Koordinatensystem in die Mitte
	fill(primaryColor);
	for (let i = 10; i >= 0; i--) {
		ellipse(0, 0, radius1, radius1); // Kreis erschaffen
	}
	ellipse(0, 0, radius1, radius1); // Kreis erschaffen

	// Holt sich Farbinformationen der Hauptfarbe
	const h = hue(primaryColor);
	const sat = saturation(primaryColor);
	const light = lightness(primaryColor);

	fill(color(h, sat - 10, light - 10, 50)); // Bearbeitet die Hauptfarbe einmalig
	ellipse(0, 0, radius2, radius2); // Kreis erschaffen

	pop();
}

// save images

function keyPressed() {
	if (key === "s") {
		save("my-image.png");
	}
}
