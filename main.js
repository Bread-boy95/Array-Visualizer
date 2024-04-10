// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//.Global variables
let myArray = [500, 200, 350, 400, 580, 170, 225, 325, 100, 550, 250, 300, 600, 50, 275];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "gray";
for( let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
}
for(let i = 0; i < myArray.length; i++) {
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
}

    // Request another Animation Frame
    requestAnimationFrame(draw);
}