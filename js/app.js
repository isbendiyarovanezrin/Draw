"use strict";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const coordinate = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();
function resize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

function getPosition(e) {
  coordinate.x = e.clientX - canvas.offsetLeft;
  coordinate.y = e.clientY - canvas.offsetTop;
}

function start(e) {
  getPosition(e);
  document.addEventListener("mousemove", draw);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(e) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(coordinate.x, coordinate.y);
  getPosition(e);
  context.lineTo(coordinate.x, coordinate.y);
  context.stroke();
  context.closePath();
}
