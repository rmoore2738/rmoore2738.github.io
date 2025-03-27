document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("neuronCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 400;

  const membranePotential = [-70, -55, 30, -70, -90, -70];
  let stimulus = 50;

  function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#2d2d2d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.stroke();

    ctx.strokeStyle = "#1a73e8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < membranePotential.length; i++) {
      const x = 50 + (i * (canvas.width - 100)) / (membranePotential.length - 1);
      const y = canvas.height - 50 - (membranePotential[i] + stimulus / 10) * 2;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  window.updateNeuron = function (newStimulus) {
    stimulus = parseInt(newStimulus, 10);
    document.getElementById("stimulus-value").textContent = stimulus;
    drawGraph();
  };

  drawGraph();
});

