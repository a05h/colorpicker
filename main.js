"use strict";

document.addEventListener("DOMContentLoaded", () => {

  let hue = document.getElementById("hue"),
      contextHue = hue.getContext("2d");

  let mouse = { x: 0, y: 0 };

  let centerX = hue.width / 2,
      centerY = hue.height / 2,
      stepX = centerX,
      stepY = centerY;

  for (let i = 0; i < 360; i += 0.1) {
    let radius = i * (2 * Math.PI) / 360;
    contextHue.beginPath();
    contextHue.strokeStyle = `hsl(${i},100%,50%)`;
    contextHue.moveTo(centerX, centerY);
    contextHue.lineTo(centerX + stepX * Math.cos(radius), centerY + stepY * Math.sin(radius));
    contextHue.stroke();
  }

});
