var mouseEvent = "empty"
var last_positionx, last_positiony
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "aqua";
width = 2;


canvas.addEventListener("mousedown", mymousedown)

function mymousedown(e) {
    color = document.getElementById("color").value
    width = document.getElementById("width").value
    mouseEvent = "mousedown"



}

canvas.addEventListener("mousemove", mymousemove)

function mymousemove(e) {
    currentx = e.clientX - canvas.offsetLeft
    currrenty = e.clientY - canvas.offsetTop

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.lineWidth = 2

        ctx.moveTo(last_positionx, last_positiony)
        ctx.lineTo(currentx, currrenty)
        ctx.stroke()

    }
    last_positionx = currentx
    last_positiony = currrenty

}
canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e) {

    mouseEvent = "mouseup"



}
canvas.addEventListener("mouseleave", mymouseleave)

function mymouseleave(e) {

    mouseEvent = "mouseleave"



}

function cleararea() {
    ctx.clearRect(0, 0, 600, 800)
}