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
  $(document).on('keydown', handleKeydown);
  console.log(handleKeydown);    // change 'eventType' to the type of event you want to handle

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
  }
  
  /* 
  Called in response to events.
  */
  function handleKeydown(event) {

      if(event.which === 37){
        console.log("Left pressed");
         speedXAxis = -5;
      }
      if(event.which === 39){
        console.log("Rigt pressed");
        speedXAxis = 5;

      }
      if(event.which === 38){
       console.log("Up key pressed");
       speedXAxis = 5;

      }
      if(event.which === 40){
       console.log("Down key pressed");
       speedXAxis = -5;

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
  }

  function redrawGameItem(){
    $("walker").css("left", xCoordinates);
  }

  //console.log(redrawGameItem);
}
