var gameState=0;
var database,playerCount,form,player,game,allPlayers;
var car1,car2,car3,car4,cars

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    //the game database is the database of firebase
    database=firebase.database()
    game=new Game()
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.updateState(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
}

