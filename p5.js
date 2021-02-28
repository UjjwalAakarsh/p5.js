function preload(){

}

function setup() {
    canvas=createCanvas(400,400) //Code for creating canvas
    canvas.center() //Code for placing canvas in the center
    video=createCapture(VIDEO) //CODE FOR ACCESSING THE WEBCAM
    video.hide() //CODE FOR HIDING THE WEBCAM
}
rect(0,90,30,310)
function draw() {
    //image(picture,x,y,width,height)
    image(video,0,0,400,400)
    fill("red")
    //circle(x,y,radius)
    circle(15,15,30)
    circle(45,15,30)
    circle(75,15,30)
    rect(90,0,220,30)
    circle(325,15,30)
    circle(355,15,30)
    circle(385,15,30)
    circle(385,45,30)
    circle(385,75,30)
    rect(370,90,100,220)
    circle(385,385,30)
    circle(385,355,30)
    circle(385,325,30)
    circle(355,385,30)
    circle(325,385,30)
    circle(15,45,30)
    circle(15,75,30)
    rect(0,90,30,220) 
    circle(15,325,30)
    circle(15,355,30)
    circle(15,385,30)
    circle(45,385,30)
    circle(75,385,30)
    rect(90,370,220,30)

}

function take_snapshot(){
save("ujjwal.png")
}