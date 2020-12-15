var gamestate=0;
var database;
var playcount,player,game,form;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game();
    game.getState();
game.start();
}

function draw(){
    background("white");

}
