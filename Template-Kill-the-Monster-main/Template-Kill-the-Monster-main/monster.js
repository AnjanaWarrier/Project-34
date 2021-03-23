class Monster {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1,
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.monster_img = loadImage("images/Monster-02.png")
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.monster_img, pos.x, pos.y, this.width, this.height);
    }
}
