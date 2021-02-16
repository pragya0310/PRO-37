var gameState=0;
var db;
var game,player,form;
var playerCount=null;
var playerInfo;


function setup(){
createCanvas(800,800)
db=firebase.database()
game=new Game()
game.getstate()
game.start()
}
function draw(){
background("cyan")

if(
    playerCount==4
)
{gameState=1;game.updateState(gameState)}
if(gameState==1){game.play()}
}