// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
   applyFilter(decreaseBlue);
   applyFilter(reddify);
   applyFilter(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
 for (var i = 0; i < image.length; i++) {           // run through the rows
   for (var s = 0; s < image[i].length; s++) {      //goes through columns
    console.log(image[i][s]);                       //shows process in console
    var rgbString = image[i][s];
    var rgbNumbers = rgbStringToArray(rgbString) 
    filterFunction(rgbNumbers);                    //makes tint less red then before  
    rgbString = rgbArrayToString(rgbNumbers);     
    image[i][s] = rgbString;

  }
 }
  
};
console.log(keepInBounds(-30)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(127)); // should print 127
// TODO 7: Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction) {
  var backGroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {           // run through the rows
    for (var s = 0; s < image[i].length; s++) {      //goes through columns
     console.log(image[i][s]);                       //shows process in console
     var rgbString = image[i][s];
     if (rgbString !== backGroundColor){
      var rgbNumbers = rgbStringToArray(rgbString) 
      filterFunction(rgbNumbers); 
      rgbString = rgbArrayToString(rgbNumbers);
    }
  }
   image[i][s] = rgbString;    
  }                                //IM ON THE TESTING PART OF TODO 7 BUT I HAD TO GO BACK TO THE "increaseGreenByBlue" PART OF TODO 6//
                                                   // I NEED HELP ON WHAT TO PUT IN THE CODE BLOCK OF "increaseGreenByBlue"//
  

};

// TODO 5: Create the keepInBounds function

function keepInBounds(num){
  var checkedNum = Math.max(num, 0)
  var checkedNum2 = Math.min(checkedNum, 255)
  return checkedNum2;
}

// TODO 3: Create reddify function

function reddify (thisArray) {
  thisArray[RED] = 200;                          // changes red's number from 255 to 200 which makes it lighter
}

// TODO 6: Create more filter functions

function decreaseBlue(arr){
  arr[BLUE] = keepInBounds(arr[BLUE] - 50);
}

function increaseGreenByBlue(arr){
  var result = arr[GREEN] + arr[BLUE];
  arr[GREEN] = keepInBounds(result);
}
 // CHALLENGE code goes below here