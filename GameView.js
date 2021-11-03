class GameView{

    constructor(width, height, start, background){

        this.width = width;
        this.height = height;
        this.start = start;
        this.score = 0;
        this.background = background;
        this.restart = false;
    }

    setWidth(width){}

    setHeight(height){}

    setStart(start){}

    setScore(score){}

    setBackground(background){}

    setRestart(restart){}

    getWidth(){

        return this.width;
    }

    getHeight(){

      return this.height; 
    }

    getStart(){

        return this.start;
    }

    getScore(){

        return this.score;
    }

    getBackground(){

        return this.background;
    }

    getRestart(){

        return this.restart;
    }

    setUp(){}

    paintBackground(){}

    paintAssets(){}

    draw(){}
}

var mousePressed = false;
var mXCoordinate = 150;
var mYCoordinate = 350;
var circleArr = [];

function setup(){

   createCanvas(920,690);
}

function draw(){

    rect(0, 400, 920);
    rect(50, 300, 100);
    rect(680, 225, 175);
    rect(680, 49, 175);

    if(mousePressed){

        circle(mXCoordinate, mYCoordinate, 20);
        mXCoordinate += 5;
    }

}



function mouseReleased(){

    mousePressed = true;
    console.log("mouseReleased ran");
}