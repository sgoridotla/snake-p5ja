function Snake() {
    this.snakeSize = scl;
    this.x = canvasWidth/2 - this.snakeSize;
    this.y = canvasHeight/2 - this.snakeSize;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 1;
    this.tail = [];
    this.SnakeGetCrazyAndTryToSuicide = false;

    var self = this;


    this.dir = function(x, y) {
        x * scl != -this.xspeed ? this.xspeed = x * scl : this.xspeed = this.xspeed;
        y * scl != -this.yspeed ? this.yspeed = y * scl : this.yspeed = this.yspeed;
    }

    this.update = function() {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1]
        }
        this.tail[this.total-1] = {x:this.x, y:this.y} 

        this.x += this.xspeed;
        this.y += this.yspeed;

        // Snake doest hit walls
        // this.x = constrain(this.x, 0, canvasWidth - this.snakeSize);
        // this.y = constrain(this.y, 0, canvasHeight - this.snakeSize);
    }

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, this.snakeSize, this.snakeSize);
        }
    }

    this.eat = function(pos) {
        var distance = dist(this.x, this.y, pos.x, pos.y);
        if(distance <= 1) {
            this.total++;
            return true;
        } else {
            return false;
        };       
    }

    this.death = function() {
        for(var i = 0; i < this.tail.length - 2; i++) {
            if(this.tail[i].x == this.tail[this.total - 1].x && this.tail[i].y == this.tail[this.total - 1].y) {
                this.SnakeGetCrazyAndTryToSuicide = true 
            }
        }    


        if (this.tail[this.total - 1].x <= -1 || this.tail[this.total - 1].x >= canvasWidth - this.snakeSize + 1) {
            return true
        } else if (this.tail[this.total - 1].y <= -1 || this.tail[this.total - 1].y >= canvasHeight - this.snakeSize + 1) {
            return true 
        } else if (this.SnakeGetCrazyAndTryToSuicide && this.total > 2) {    
            return true 
        } else {
            return false
        }
    }
}