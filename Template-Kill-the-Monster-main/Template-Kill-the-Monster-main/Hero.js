class Hero {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.superhero_flying = loadImage("images/Superhero-02.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     
      image(this.superhero_flying, pos.x, pos.y, this.width, this.height);
    }
  };
