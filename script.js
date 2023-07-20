//your JS code here. If required.

const line = document.getElementById('line');
line.style.width = '200px';
line.style.height = '2px';
line.style.backgroundColor = 'black';
let deg = 0;
setInterval(() => {
  line.style.transform = `rotate(${deg}deg)`;
  deg += 1;
}, 10);
