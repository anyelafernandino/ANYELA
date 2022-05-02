// List to store all the vertices
let vertices = [];
 
// Variable declared
var iter;
var counter;
 
// Function to set up output windoww
function setup() {
 
    // Size of output window
    createCanvas(600, 600);
 
    // Fill the color
    fill(31);
 
    // Background of output window
    background(31);
 
    // Put the value of variables as 1
    iter = 1;
    counter = 1;
 
    // Initialize the list of vertices
    addVertices();
}
 
// Set the draw function
function draw() {
 
    stroke(255);
    strokeWeight(4);
    step();
 
    // Condition to check within bound
    if (iter < 11) {
 
        // Increase counter everytime
        counter += 0.05;
 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else {
 
        // If iter increases by 11 then
        // stop the loop
        noLoop();
    }
}
 
// Function to add vertices of house giving
// start and end point of line
function addVertices() {
    vertices.push(new p5.Vector(100, 300));
    vertices.push(new p5.Vector(340, 300));
    vertices.push(new p5.Vector(40, 380));
    vertices.push(new p5.Vector(160, 380));
    vertices.push(new p5.Vector(400, 380));
    vertices.push(new p5.Vector(40, 550));
    vertices.push(new p5.Vector(160, 550));
    vertices.push(new p5.Vector(400, 550));
}
 
// Function to draw lines in house
function drawLine(a, b) {
    line(vertices[a].x, vertices[a].y,
        vertices[b].x, vertices[b].y);
}
 
// Function to draw gate
function addGate() {
    rectMode(CENTER);
    rect(100, 500, 70, 100);
}
 
// Function  to draw window
function addWindow() {
    rect(280, 430, 40, 30);
}
 
// Function to add  circular window
function addOculus() {
    ellipse(100, 340, 20, 20);
}
 
// Function to add Chimney
function addChimney() {
    rect(320, 295, 16, 20);
    ellipse(320, 285, 16, 10);
}
 
// Function to draw parts of
// house step by step
function step() {
    switch (iter) {
        case 1:
            drawLine(5, 6);
            break;
        case 2:
            drawLine(6, 7);
            break;
        case 3:
            drawLine(2, 5);
            drawLine(3, 6);
            break;
        case 4:
            drawLine(4, 7);
            break;
        case 5:
            drawLine(2, 3);
            drawLine(3, 4);
            break;
        case 6:
            drawLine(0, 2);
            drawLine(0, 3);
            drawLine(1, 4);
            break;
        case 7:
            drawLine(0, 1);
            break;
        case 8:
            addGate();
            break;
        case 9:
            addWindow();
            break;
 
        case 10:
            addOculus();
            break;
        case 11:
            addChimney();
            break;
    }
}

