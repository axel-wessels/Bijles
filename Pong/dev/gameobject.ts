class Gameobject{
    protected xpos:number
    protected ypos:number
    protected xspeed:number
    protected yspeed:number
    protected html:HTMLElement
    constructor(xspeed:number, yspeed:number, xpos:number, ypos:number, name:string) {
        this.html = document.createElement(name)
        document.body.appendChild(this.html)

        this.xpos = xpos
        this.ypos = ypos

        this.xspeed = xspeed
        this.yspeed = yspeed
    }

    public move():void{
        this.xpos += this.xspeed
        this.ypos += this.yspeed

        this.draw()
    }

    private draw():void{
        this.html.style.transform = `translate(${this.xpos}px, ${this.ypos}px)`
    }
   
}

    
