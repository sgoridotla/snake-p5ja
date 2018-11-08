function Food() {
    this.x = Math.floor(random(canvasWidth / scl)) * scl;
    this.y = Math.floor(random(canvasHeight / scl)) * scl;

    this.godSendsNewFood = function () {
        this.x = Math.floor(random(canvasWidth / scl)) * scl;
        this.y = Math.floor(random(canvasHeight / scl)) * scl;
    }

    this.show = function () {
        fill(255, 0, 0);
        rect(this.x, this.y, scl, scl);
    }
}