var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers; 

//initiate the car vairables 

var cars, car1, car2, car3, car4


function setup(){

  //change the canvas size
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1)
  }

  if(gameState === 1){
    //clear all the elements on the canvas and makes it transparent
    clear();
    game.play();
  }
}