let locationX = 0;
let velocityX = 30;

function setup() {
	frameRate(10);
	createCanvas(500, 300);
	colorMode(HSB);
}

function draw() {
	// background('#fff');
	noStroke();
	fill(random(160, 200), 100, 100, 0.3);
	ellipse(random(0, width), random(0, height), 80, 80);

	// let randomTest = random(180, 10);
	// console.log(randomTest);

	locationX += velocityX;
	// console.log(locationX);

	if (locationX > 400) {
		locationX = 0;
	}
}
