/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array){                  //sorts all elements of the provided array from smallest to largest
    for(var i = 0; i < array.length; i++){
      for(var j = i + 1; j < array.length; j++){
        if(array[j].value < array[i].value){
          swap(array, i, j);
          updateCounter(bubbleCounter);
          await sleep();
        }
      }
    }
  }


// TODO 3: Implement quickSort

async function quickSort(array, left, right){
    console.log("quick sort is called")
    if (right - left < 0){
        return;
    }
    else{
        console.log(left, right);
        var index = await partition(array, left, right);
        if (left < index - 1){
            await quickSort(array, left, index - 1);
        } 
        if (right > index){
            await quickSort(array, index, right);
        }
    }
}           

// TODOs 4 & 5: Implement partition

async function partition(array, left, right){
    console.log(left, right);
    var pivot = array[Math.floor((right + left)/2)].value;
    while (left < right){
         console.log("yo");

        while (array[left].value < pivot){
            left++;
        }
        while (array[right].value > pivot){
            right--;
        }

        if(left < right){
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep();
        }    
  }  
return left + 1;
} 


// TODO 1: Implement swap
function swap(array,i,j){                          //switches two elements of the provided array
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp;
    drawSwap(array,i,j);
}


///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}