/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  
  // Game Item Objects    
  // one-time setupqw
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeydown);  // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  var KEY = {
    "LEFT": 37,
    "RIGHT":39,
    "UP": 38,
    "DOWN":40,
  };

  var xCoordinates = 0;
  var yCoordinates = 0;
  var speedXAxis = 0;
  var speedYAxis = 0;



  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
    outOfBoundsX()
    outOfBoundsY()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeydown(event) {

      if(event.which === KEY.LEFT){
        console.log("Left pressed");
         speedXAxis = -5;
      }
      if(event.which === KEY.RIGHT){
        console.log("Rigt pressed");
        speedXAxis = 5;

      }
      if(event.which === KEY.UP){
       console.log("Up key pressed");
       speedYAxis = -5;

      }
      if(event.which === KEY.DOWN){
       console.log("Down key pressed");
       speedYAxis = 5;

      }
    
  }

  function handleKeyUp (event){

      if(event.which === KEY.LEFT){
      console.log("left key released");
      speedXAxis = 0;
      }
      if(event.which === KEY.RIGHT){
      console.log("right key released");
      speedXAxis = 0;
      }
      if(event.which === KEY.UP){
      console.log("up key released");
      speedYAxis = 0;
      }
      if(event.which === KEY.DOWN){
      console.log("down key released");
      speedYAxis = 0;
      }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  function repositionGameItem(){
    xCoordinates += speedXAxis;
    yCoordinates += speedYAxis;
  }

  function redrawGameItem(){
    $("#walker").css("left", xCoordinates);
    $("#walker").css("top", yCoordinates);
  }

  function outOfBoundsX(){
    if(xCoordinates >= 1000){
      xCoordinates = 1000;
    } else if (xCoordinates <= 5){
      xCoordinates = 5;
    }
  }

  function outOfBoundsY(){
    if(yCoordinates >= 700){
      yCoordinates = 700;
    } else if (yCoordinates <= 5){
      yCoordinates = 5;
    }
  }

  //console.log(redrawGameItem);
}
