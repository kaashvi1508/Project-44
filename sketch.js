var form;
var backgroundImg;
function preload(){
    backgroundImg = loadImage("./assets/background.jpeg");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    form = new Form();
    form.display();
}

function draw(){
    background(backgroundImg);
}