class form {
    
    constructor(){
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.image = loadImage("images/Shield.jpg");
        this.punch = loadImage("images/punch.jpeg");
        this.red = loadImage("images/Red.jpeg");
        
    
    }
    
    
    hide(){
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Go Corona! Go!");
        this.title.position(400,200);
        //player.visible = false;
        this.greeting.position(200,330);
        this.greeting.html("Save yourself from the coronavirus");
       // ground1.visible = false;
        this.button.position(400,300);
        image(this.image,100,200,100,200);
        image(this.punch,200,200,100,200);
        image(this.red,600,200,100,200);
      

    }
    changeState(){
        this.button.mousePressed(()=>{
            
          gameState = 1;
           
    
            })
    }
    
}