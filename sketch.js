let hue
let diameter
let angle

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100)
  angleMode(DEGREES)
  hue = 0
}

function draw() {
  strokeWeight(5)
  noFill()
  stroke(hue, 50, 80)
  ellipse(200, 200, 300)
}