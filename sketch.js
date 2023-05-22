const rs = 25; //Sorte huls radius
const c = 299792; //Lysets hastighed
const h = 0.001; //Skridtlængde
let r1 = 1000; //Startværdi
let r2 = 1000; //Startværdi
const end = 5; //Slutpunkt

let pointIndexCounter1 = 0; //Startværdi til punkter
let coordinates1 = []; //Array til koordinatsæt
let pointIndexCounter2 = 0; //Startværdi til punkter
let coordinates2 = []; //Array til koordinatsæt


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
}

function draw() {
  background(220);
  stroke(255, 5, 5);
  eulerMethod1();
  drawPoint1(pointIndexCounter1);
  if(pointIndexCounter1 < coordinates1.length) {
    pointIndexCounter1++;  
  }
  stroke(5, 5, 255);
  eulerMethod2();
  drawPoint2(pointIndexCounter2);
  if(pointIndexCounter2 < coordinates2.length) {
    pointIndexCounter2++;  
  }
}

function drawPoint1(pointIndex){
  //tegner punkterne
  for (let i = 0; i < pointIndexCounter1; i++) {
    strokeWeight(8)
    let coordinate1 = coordinates1[i];
    point(coordinate1.x, coordinate1.y);
  }

  //Forbinder punkter med en linje
  strokeWeight(0.5);
  noFill();
  //stroke(255, 125, 125);
  beginShape();
  for (let i = 0; i < pointIndexCounter1; i++) {
    let coordinate1 = coordinates1[i];
    vertex(coordinate1.x, coordinate1.y);
  }
  endShape();
}

function eulerMethod1() {
  for (let t = 0; t <= end; t += h) {
    const derivative = -c * (1 - rs / r1) * Math.sqrt(rs / r1);
    r1 += derivative * h;

    if (isNaN(r1)) {
      break; // Stop, hvis r er NaN
    }

    coordinates1.push({ x: t*60000, y: r1 }); //Skubber koordinatsæt sådan at grafen ikke er langs den højre kant på skærmen
  }
}

function drawPoint2(pointIndex){
  //tegner punkterne
  for (let i = 0; i < pointIndexCounter2; i++) {
    strokeWeight(8)
    let coordinate2 = coordinates2[i];
    point(coordinate2.x, coordinate2.y);
  }

  //Forbinder punkter med en linje
  strokeWeight(0.5);
  noFill();
  
  beginShape();
  for (let i = 0; i < pointIndexCounter2; i++) {
    let coordinate2 = coordinates2[i];
    vertex(coordinate2.x, coordinate2.y);
  }
  endShape();
}

function eulerMethod2() {
  for (let t = 0; t <= end; t += h) {
    const derivative = -c * Math.sqrt(rs / r2);
    r2 += derivative * h;

    if (isNaN(r2)) {
      break; // Stop, hvis r er NaN
    }

    coordinates2.push({ x: t*60000, y: r2 }); //Skubber koordinatsæt sådan at grafen ikke er langs den højre kant på skærmen
  }
}