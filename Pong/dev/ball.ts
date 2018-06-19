class Ball extends Gameobject{

    constructor(){
        super(100, 100, 10, 10, "ball")
    }

    public checkCollision(){
        if(this.xpos >= (window.innerWidth - this.getRectangle().width) || this.xpos <= 0){
            this.xspeed *= -1
        }
        if(this.ypos >= (window.innerHeight - this.getRectangle().height) || this.ypos <= 0){
            this.yspeed *= -1
        }

        this.move()
    }

    public getRectangle():ClientRect{
        return this.html.getBoundingClientRect()
    }
}