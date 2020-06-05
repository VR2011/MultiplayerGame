var ball;
var database, position;

function setup(){
    database = firebase.database();
    var loc = database.ref("Ball/position");
    loc.on("value", readloc, showErr);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readloc(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showErr(){
    console.log("error");
}

function writePos(x,y){
    database.ref("Ball/position").set({
        x: position.x + x,
        y: position.y + y
    });
}