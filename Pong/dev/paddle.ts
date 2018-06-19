class Padlle{
    private html:HTMLElement

    private xPos:number
    private yPos:number

    private eventlistenerUp:any
    private eventlistenerDown:any

    private upkey:number
    private downkey:number

    private ySpeed:number

    constructor(){
        
        //making the paddle
        this.html = document.createElement("paddle")
        document.body.appendChild(this.html)

        //keycodes
        this.upkey = 38
        this.downkey = 40

        //xpos & ypos
        this.xPos = 0
        this.yPos = (window.innerHeight/2) - (this.getRectangle().height/2)

        //speed
        this.ySpeed = 0

        //register event variables
        this.eventlistenerUp = (e: KeyboardEvent) => this.onButtonUp(e)
        this.eventlistenerDown = (e: KeyboardEvent) => this.onButtonDown(e)

        //register keyevents
        window.addEventListener("keyup", this.eventlistenerUp)
        window.addEventListener("keydown", this.eventlistenerDown)
    }

    private onButtonUp(e:KeyboardEvent):void{
        if(e.keyCode == this.upkey){
            this.ySpeed = 0
        }
        if(e.keyCode == this.downkey){
            this.ySpeed = 0
        }
    }

    private onButtonDown(e:KeyboardEvent):void{
        if(e.keyCode == this.upkey){
            this.ySpeed = -10
        }
        if(e.keyCode == this.downkey){
            this.ySpeed = 10
        }
    }

    public getRectangle():ClientRect{
        return this.html.getBoundingClientRect()
    }

    public move():void{
        this.yPos += this.ySpeed
        this.draw()
    }

    private draw():void{
        this.html.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`
    }
}