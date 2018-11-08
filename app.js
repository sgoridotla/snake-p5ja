var scl = 20;
var canvasWidth = 30 * scl,
    canvasHeight = 30 * scl;

var difficulty = 1;


var snake, food;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(10 * difficulty);

    snake = new Snake();
    food = new Food();
}

function draw() {
    background(0);
    snake.update();
    snake.show();

    food.show();
    if (snake.death()) {
        snake = new Snake();
        food.godSendsNewFood();
    }
    if(snake.eat(food)) {
        console.log('SNAKE EATS THE FOOOOOOD!')
        food.godSendsNewFood();
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    }
}