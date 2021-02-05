noseX = 0;
noseY = 0;

function preload(){

 clown = loadImage('https://i.postimg.cc/4yDWRLPt/moustache.png');

}

function setup(){

  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function draw(){

  image(video,0,0,300,300);
  image(clown,noseX,noseY,50,50)

 

}

function takeSnap(){

 save("HelloMr.png");

}

function gotPoses(result){

  if(result.length > 0){

     console.log(result);
     noseX = result[0].pose.nose.x -25;
     noseY = result[0].pose.nose.y -10;
     

  }

 

}

function modelLoaded(){

 console.log("model has been loaded");

}