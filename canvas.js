let canvas = document.getElementById('paint');
let brush = document.getElementById('brush-size');
let colorPicker = document.getElementById('colorPicker');
let brushType = document.getElementById('brush-type');
let transparency = document.getElementById('transparency-level');

let ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let lastX = 0;
let lastY = 0;

let isDrawing = false;

function draw(e) {
    if(!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function changeBrushSize(event) {
    ctx.lineWidth = this.value;
};

function changeColor(event) {
    ctx.strokeStyle = this.value;
};

function changeBrushType() {
    ctx.lineCap = this.value;
};

function changeTransparency() {
    ctx.globalAlpha = this.value;
}

// Events

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') ctx.clearRect(0, 0, canvas.width, canvas.height);
});

brush.addEventListener('change', changeBrushSize);
colorPicker.addEventListener('change', changeColor);
brushType.addEventListener('change', changeBrushType);
transparency.addEventListener('change', changeTransparency);





