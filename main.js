'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //let hue = document.createElement('hue');
  let hue = document.getElementById('hue'),
      contextHue = hue.getContext('2d');

  let mouse = { x: 0, y: 0 };

  let centerX = hue.width / 2,
      centerY = hue.height / 2,
      stepX = centerX,
      stepY = centerY;
  let hueStep = 1 / centerX;

  for (let i = 0; i < 360; i += hueStep) {
    let radius = i * (2 * Math.PI) / 360;
    contextHue.beginPath();
    contextHue.strokeStyle = `hsl(${i},100%,50%)`;
    contextHue.moveTo(centerX, centerY);
    contextHue.lineTo(centerX + stepX * Math.cos(radius), centerY + stepY * Math.sin(radius));
    contextHue.stroke();
    
    contextHue.fillStyle = 'rgb(255, 255, 255)';
    contextHue.beginPath();
    contextHue.arc(radius, radius, radius * 2, 0, Math.PI * 2, true);
    contextHue.closePath();
    contextHue.fill();
  }
  
    
  
  
  hue.addEventListener('mousemove', (event) => {
    
    mouse.x = event.pageX - hue.offsetLeft;
    mouse.y = event.pageY - hue.offsetTop;
    //let point = contextHue.getImageData(mouse.x, mouse.y, 1, 1).data;
    let point = contextHue.getImageData(mouse.x, mouse.y, 1, 1).data;
    //let data = point.data;
    let rgba = `rgba(${point[0]},${point[1]},${point[2]},${Math.round(point[3]/255)})`;
    document.getElementById("test-result").style.backgroundColor = rgba;
   
  });
  

});


