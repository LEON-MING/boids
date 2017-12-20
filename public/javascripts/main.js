var options = {
  background: '#ffffff',
  density: 'high',
  speed: 'fast',
  interactive: true,
  mixedSizes: false,
  boidColours: ['#000000']
};

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    options.interactive = false;
}

var canvasDiv = document.getElementById('boids-canvas');

var boidsCanvas = new BoidsCanvas(canvasDiv, options);
