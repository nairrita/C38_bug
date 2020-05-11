class Form {
  constructor() {
    
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

 

  hide(){
    this.greeting.hide()
    this.button.hide();
    this.input.hide()
  }

  // the form elements to be adjusted as per the displayWidth display height
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);
    this.input.position(displayWidth/2-40, displayHeight/2 - 80);
    this.button.position(displayWidth/2 +30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
//changed from  var to player 
      player.name = this.input.value();
      playerCount+=1;
      //Added
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    });

  }
}