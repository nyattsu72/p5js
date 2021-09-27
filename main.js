let locationX, locationY;
let velocityX, velocityY;
let accelX, gravity;

function setup() {
	// frameRate(10);
	// frameRate(10);
	createCanvas(500, 300);
	colorMode(HSB);
	locationX = width / 2;
	locationY = height / 2;
	velocityX = 10;
	velocityY = 10;
	accelX = -1;
	gravity = 0.1;
}

function draw() {
	background('#fff');
	noStroke();
	fill(200, 100, 100, 1);
	ellipse(locationX, locationY, 80, 80);

	// velocityX += accelX;
	// locationX += velocityX;

	velocityY += gravity;
	locationY += velocityY;

	// if (locationX > width) {
	// 	locationX = 0;
	// }

	// if (locationX > width || locationX < 0) {
	// 	velocityX = velocityX * -1;
	// }
	if (locationY > height || locationY < 0) {
		velocityY = velocityY * -1;
	}

	console.log('位置', locationY, '速度', velocityY, '加速度', gravity);
}
