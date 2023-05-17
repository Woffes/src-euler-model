let rs = 25; //Sorte huls radius
let c = 299792; //Lysets hastighed
let h = 0.001; //Skridtlængden
let r = 1000; //Startpunkt fra det sorte hul
let end = 1; //Slutpunkt

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220);
  eulerMethode()
}

  function eulerMethode() {
    for (let t = 0; t <= end; t += h) {
      const derivative = -c * (1 - rs / r) * Math.sqrt(rs / r);
      r += derivative * h;
  
      if (isNaN(r)) {
        break; // Stop, hvis r er NaN
      }
      console.log(`t: ${t.toFixed(3)}, r: ${r.toFixed(3)}`);
    }
  }