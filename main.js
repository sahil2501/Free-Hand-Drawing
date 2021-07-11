var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color;
var width;
var diameter;
var mouse_x;
var mouse_y;
var mouse_event;
canvas.addEventListener("mousemove", my_mouseover);
function my_mouseover(e) {
    mouse_event = "mousemove";
    mouse_x = e.clientX - canvas.offsetLeft - 20;
    mouse_y = e.clientY - canvas.offsetTop - 20;
    color = document.getElementById("getColor").value;
    console.log(color);
    d(mouse_x, mouse_y);
}

function d(mouse_x, mouse_y) {
    color = document.getElementById("getColor").value;
    width = document.getElementById("getLineWidth").value;
    diameter = document.getElementById("getDiameter").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mouse_x, mouse_y, diameter, 0, 2 * Math.PI);
    ctx.stroke();
}

function h() {
    document.getElementById("getColor").innerHTML = "white";
    document.getElementById("getLineWidth").innerHTML = "200";
    document.getElementById("getDiameter").innerHTML = "100";
}