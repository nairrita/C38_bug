class Player {
  constructor(){
    //Adding the Properties 
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//change the update function to update the distance along with the name 
  update(){
    var playerIndex = "players/player" + this.index;//changing the reference to the databases as all the players are under players tag
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance
    });
  }

  //function to get the informatio of all the Players
  //static function since the function is not going to be attached to any individual players

  static getPlayerInfo(){
    var playerInforef = database.ref('players')
    playerInforef.on("value", (data)=>{
      allPlayers  = data.val();
    })
  }
}
