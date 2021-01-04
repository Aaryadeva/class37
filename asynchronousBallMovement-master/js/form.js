class Form{
    constructor(){
        this.title=createElement('h2')
        this.input=createInput("").attribute("placeHolder","name")
        this.button=createButton("play")
        this.button2=createButton("reset")
        this.greeting=createElement('h2')
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
       
        this.title.html("car racing game")
        this.title.position(displayWidth/2-50,100);
       
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button2.position(displayWidth-100,100);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("welcome "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
        this.button2.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
            database.ref("players").remove()
            clear()
            game.start()
        })
            
    }
}
