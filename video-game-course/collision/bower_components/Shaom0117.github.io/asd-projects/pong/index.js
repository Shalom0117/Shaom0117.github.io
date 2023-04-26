/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  function gameItem (id, x, y, speedX, speedY, width, height) {
    var gameItem = {};
    gameitem.id = id,
    gameitem.x = x,
    gameitem.y = y,
    gameitem.speedX = speedX,
    gameitem.speedY = speedY,
    gameitem.width = width,
    gameitem.height = height;
    return gameitem;

  }

  var ball = gameItem("#ball", $("#ball").css("left"), $("#ball").css("top"), speedX, speedY, $("#ball").width(), $("#ball").height());
  var leftpaddle = gameItem("#leftpaddle", x, y, speedX, speedY, $("#leftpaddle").width(), $("#leftpaddle").height());
  var rightpaddle = gameItem('#rightpaddle', x, y, speedX, speedY, $("#rightpaddle").width(), $("#rightpaddle").height());
  var player1score = gameItem('#player1score', x, y, speedX, speedY, $("#player1score").width(), $("#player1score").height());
  var player2score = gameItem('#player2score', x, y, speedX, speedY, $("#player2score").width(), $("#player2score").height());
  


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

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
  function startball(){}
  
}
