let timeline = document.getElementById("timelineContainer");
let lineCanvas = document.getElementById("lineCanvas");
let lineCanvas2D = lineCanvas.getContext("2d");

let setCanvasSize = () => {
    lineCanvas.height = timeline.offsetHeight;
    lineCanvas.width = timeline.offsetWidth;
}

window.onload = setCanvasSize;
window.onresize = setCanvasSize;