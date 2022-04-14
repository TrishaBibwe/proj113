function preload(){

}

function setup(){
    mycanvas=createCanvas(500,400);
    mycanvas.position(70,200);
    myvideo=createCapture(VIDEO);
    myvideo.hide();
    
    }

function draw(){
    image(myvideo,100,80,300,250);
    
    stroke(8, 90, 212);
    fill(8, 90, 212)

    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(222, 13, 97);
    fill(222, 13, 97);

    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
}

function take_snapshot(){
    save('memories.png');
}










