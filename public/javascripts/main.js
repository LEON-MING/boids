var options = {
  background: '#ffffff',
  density: 'high',
  speed: 'fast',
  interactive: true,
  mixedSizes: false,
  boidColours: ['#000000']
};

var canvasDiv = document.getElementById('boids-canvas');

var boidsCanvas = new BoidsCanvas(canvasDiv, options);
