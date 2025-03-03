// relative Koordinaten und Größen
//const x = (n) => width * n;
//const y = (n) => height * n;
//const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(400, 400);
	colorMode(HSL, 360, 100, 100, 100); // Farbsystem
	const primaryColor = color(0, 0, 0); // Hauptfarbe
	angleMode(DEGREES); // Auf Grad umstellen
	background("#efefef"); // Hintergrundfarbe
	strokeWeight(1.5); // Linienstärke

	push();
	translate(width / 2, height / 2); // Koordinatensystem mittig

	stroke(primaryColor);
	for (let radius = 0; radius < 360; radius += 20) {
		// Radius ist null, wenn Radius kleiner ist als 360 wird der Code unten ausgeführt. Danach rechnet er plus 20 und führt erneut den Code aus. Solange bis 360 überschritten ist.
		let x = 0 + cos(radius) * max(width, height); // Berechnet x jedesmal neu
		let y = 0 + sin(radius) * max(width, height); // Berechnet y jedesmal neu

		line(0, 0, x, y); // Erstellt Linie
	}

	pop();
}

// save images

function keyPressed() {
	if (key === "s") {
		save("my-image.png");
	}
}
