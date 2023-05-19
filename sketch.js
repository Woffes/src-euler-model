const rs = 25; //Sorte huls radius
const c = 299792; //Lysets hastighed
const h = 0.001; //Skridtlængde
let r = 1000; //Startværdi
const end = 5; //Slutpunkt

let pointIndexCounter = 0;
let coordinates = []; //Array til koordinatsæt

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
}

function draw() {
  background(220);
  eulerMethod();
  drawPoint(pointIndexCounter);
  if(pointIndexCounter < coordinates.length) {
    pointIndexCounter++;  
  }
}

function drawPoint(pointIndex){
  //tegner punkterne
  for (let i = 0; i < pointIndexCounter; i++) {
    strokeWeight(8)
    let coordinate = coordinates[i];
    point(coordinate.x, coordinate.y);
  }

  //Forbinder punkter med en linje
  strokeWeight(0.5);
  noFill();
  beginShape();
  for (let i = 0; i < pointIndexCounter; i++) {
    let coordinate = coordinates[i];
    vertex(coordinate.x, coordinate.y);
  }
  endShape();
}

function eulerMethod() {
  for (let t = 0; t <= end; t += h) {
    const derivative = -c * (1 - rs / r) * Math.sqrt(rs / r);
    r += derivative * h;

    if (isNaN(r)) {
      break; // Stop, hvis r er NaN
    }

    coordinates.push({ x: t*60000, y: r }); // Gem koordinatsæt i array
  }
}