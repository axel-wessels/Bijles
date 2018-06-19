var Ball = (function () {
    function Ball() {
        this.html = document.createElement("ball");
        document.body.appendChild(this.html);
        this.xPos = Math.random() * window.innerWidth;
        this.yPos = Math.random() * window.innerHeight;
        this.xSpeed = 10;
        this.ySpeed = 10;
    }
    Ball.prototype.move = function () {
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
        this.checkCollision();
    };
    Ball.prototype.draw = function () {
        this.html.style.transform = "translate(" + this.xPos + "px, " + this.yPos + "px)";
    };
    Ball.prototype.checkCollision = function () {
        if (this.xPos >= (window.innerWidth - this.getRectangle().width) || this.xPos <= 0) {
            this.xSpeed *= -1;
        }
        if (this.yPos >= (window.innerHeight - this.getRectangle().height) || this.yPos <= 0) {
            this.ySpeed *= -1;
        }
        this.draw();
    };
    Ball.prototype.getRectangle = function () {
        return this.html.getBoundingClientRect();
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.balls = new Array();
        this.numBalls = 20;
        for (var i = 0; i < this.numBalls; i++) {
            this.balls.push(new Ball);
        }
        this.paddle = new Padlle();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var ball = _a[_i];
            ball.move();
        }
        this.paddle.move();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Padlle = (function () {
    function Padlle() {
        var _this = this;
        this.html = document.createElement("paddle");
        document.body.appendChild(this.html);
        this.upkey = 38;
        this.downkey = 40;
        this.xPos = 0;
        this.yPos = (window.innerHeight / 2) - (this.getRectangle().height / 2);
        this.ySpeed = 0;
        this.eventlistenerUp = function (e) { return _this.onButtonUp(e); };
        this.eventlistenerDown = function (e) { return _this.onButtonDown(e); };
        window.addEventListener("keyup", this.eventlistenerUp);
        window.addEventListener("keydown", this.eventlistenerDown);
    }
    Padlle.prototype.onButtonUp = function (e) {
        if (e.keyCode == this.upkey) {
            this.ySpeed = 0;
        }
        if (e.keyCode == this.downkey) {
            this.ySpeed = 0;
        }
    };
    Padlle.prototype.onButtonDown = function (e) {
        if (e.keyCode == this.upkey) {
            this.ySpeed = -10;
        }
        if (e.keyCode == this.downkey) {
            this.ySpeed = 10;
        }
    };
    Padlle.prototype.getRectangle = function () {
        return this.html.getBoundingClientRect();
    };
    Padlle.prototype.move = function () {
        this.yPos += this.ySpeed;
        this.draw();
    };
    Padlle.prototype.draw = function () {
        this.html.style.transform = "translate(" + this.xPos + "px, " + this.yPos + "px)";
    };
    return Padlle;
}());
//# sourceMappingURL=main.js.map