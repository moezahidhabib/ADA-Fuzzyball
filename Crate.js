class Crate{

    constructor(width, height, id, colour){

        this.width = width;
        this.height = height;
        this.id = id;
        this.colour = colour;
        this.xLocation = 0;
        this.yLocation = 0;
        this.velocity = 0;
    }

    collisionDetection(){}

    setXLocation(xLocation){}

    setYLocation(yLocation){}

    setWidth(width){}

    setHeight(height){}
  
    setId(id){}
  
    setColour(colour){}
    
    setVelocity(velocity){}

    getXLocation(){

        return this.xLocation;
      }
    
      getYLocation(){
    
        return this.yLocation;
      }
    
      getWidth(){
    
        return this.width;
      }
    
      getHeight(){
    
        return this.height;
      }
    
    
      getColour(){
    
        return this.colour;
      }
    
      getVelocity(){
    
        return this.velocity;
      }
    
      getId(){
    
        return this.id;
      }
    
}