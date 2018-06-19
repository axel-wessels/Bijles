class Game {
    private balls:Array<Ball>
    private numBalls:number
    private paddle:Padlle

    constructor() {

        this.balls = new Array<Ball>()
        this.numBalls = 20

        for(let i = 0; i<this.numBalls; i++){
            this.balls.push(new Ball)
        }

        this.paddle = new Padlle()


        this.gameLoop()
    }
    
    private gameLoop(){
        requestAnimationFrame(()=>this.gameLoop())

        for(let ball of this.balls){
            ball.checkCollision()
        }

        this.paddle.move()
    }
}

window.addEventListener("load", () => new Game())
