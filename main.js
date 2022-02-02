Nose_x = 0
Nose_y = 0
Nose_Image = ""
function preload(){
Nose_Image = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup(){
Canvas = createCanvas(300 , 300);
Canvas.center();
Video=createCapture(VIDEO);
Video.hide();

Pose = ml5.poseNet(Video ,ModelLoad)
Pose.on("pose", GotYourNose)
}
function draw(){
image(Video , 0 , 0 , 300,300);
fill("red");
stroke(255,0,0);
//circle(Nose_x,Nose_y, 20);
image(Nose_Image , Nose_x - 190, Nose_y - 130, 15,15);
}
function take_snapshot(){
save("MyFilteredNose.png");
}
function ModelLoad(){
console.log("PoseNet is Ready")    
}
function GotYourNose(PositionofNose){
if( PositionofNose.length > 0){
console.log(PositionofNose); 
Nose_x = PositionofNose[0].pose.nose.x;
Nose_y = PositionofNose[0].pose.nose.y;
console.log(Nose_x);
console.log(Nose_y);  
}
}