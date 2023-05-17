
const rs = 25; //Sorte hul's radius
const c = 299792; //Lysets hastighed
const h = 0.001; //Skridtlængde
let r = 1000; // Startværdi
const end = 1; //Slutpunkt

let coordinates = []; //Array til koordinatsæt

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1)
}

function draw() {
  background(220);
  eulerMethod();
  drawPoints();
}

function drawPoints(){
  for (let i = 0; i < coordinates.length; i++) {
    strokeWeight(10)
    let coordinate = coordinates[i];
    point(coordinate.x, coordinate.y);
  }
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