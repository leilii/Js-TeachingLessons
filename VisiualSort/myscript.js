/** Function to do bubble sort on an array**/
function bubbleSort(array) {
  let swapped = true;
  let divID = 10;
  do {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      let bubbleNom = "bubble" + (j + 1).toString();
          if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    // shows comparing
    console.log(array, "DIV ID=", divID);
    
    if (swapped == true) {
      doPrint(array, divID);
    }

    divID = divID + 10;
  } while (swapped);
  return array;
}
function bubbleDelay(array, i) {
  doPrint(array, i);
  setTimeout(function () {
    // Add tasks to do with delay
    let bubbleNom = "bubble" + (i + 1).toString();
    //prints array in each step
    document.getElementById(bubbleNom).style.border = "2px solid yellow";
  }, 1 * i);
}

function pickNums() {
  // creates balls with different shades
  var // nums = [255,220,190,160,130,100,80,50,25,0],
    nums = [0, 90, 140, 170, 210, 255],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    //shufels nums items puts in ranNams
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  for (let i = 0; i < ranNums.length; i++) {
    let bubbleNom = "bubble" + (i + 1).toString(); // creates the div ids
 
    document.getElementById(bubbleNom).innerHTML = ranNums[i]; // prints each number in the right div
    // style the background for each item to create 3d balls shape
    let bg =
      " radial-gradient(circle at 65% 15%, rgb(255, 255, 255) 1px, rgb(0, 255, 255) 5%, rgb(" +
      ranNums[i] * 0.2 +
      "," +
      ranNums[i] * 0.7 +
      "," +
      ranNums[i] +
      ") 70%, rgb(0, 255," +
      ranNums[i] +
      ") 100%)";

    document.getElementById(bubbleNom).style.background = bg;
    document.getElementById(bubbleNom).style.width = "60px";
    document.getElementById(bubbleNom).style.height = " 60px";
    document.getElementById(bubbleNom).style.borderRadius = "50%";
  }

  return ranNums;
}
function doPrint(nums, j) {
  let endList = (j + 10) / 10 - 1;
  for (let i = 0; i < nums.length; i++) {
    let bubbleNom = "bubble" + (++j).toString(); // creates the div ids

    document.getElementById(bubbleNom).innerHTML = nums[i]; // prints each number in the right div
    let bg =
      " radial-gradient(circle at 65% 15%, rgb(255, 255, 255) 1px, rgb(0, 255, 255) 5%, rgb(" +
      nums[i] * 0.2 +
      "," +
      nums[i] * 0.7 +
      "," +
      nums[i] +
      ") 70%, rgb(0, 255," +
      nums[i] +
      ") 100%)";
    document.getElementById(bubbleNom).style.background = bg;
    document.getElementById(bubbleNom).style.width = "60px";
    document.getElementById(bubbleNom).style.height = " 60px";
    document.getElementById(bubbleNom).style.borderRadius = "50%";
    document.getElementById(bubbleNom).style.boxshadow =
      " 0 2px 10px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 lightgreen(0, 0, 0, 0.19)";
   
  }
  console.log("Step" + endList);
  let stepID = "bubble" + (j + 1).toString();
  console.log(stepID);
  console.log("bublle17");
  let stp = "Step" + endList.toString();
  console.log(stp);
  document.getElementById(stepID).innerHTML = stp;
}
function doSort() {
  // sorts the array and shows balls in order of shades
  let sortednums = bubbleSort(pickNums());
  console.log("My new sorted numbers are :" + sortednums);
  for (let i = 0; i < sortednums.length; i++) {
    let bubbleNom = "bubble" + (i + 11).toString(); // creates the div ids
    document.getElementById(bubbleNom).innerHTML = sortednums[i]; // prints each number in the right div
    let bg =
      " radial-gradient(circle at 65% 15%, rgb(255, 255, 255) 1px, rgb(0, 255, 255) 5%, rgb(" +
      sortednums[i] * 0.2 +
      "," +
      sortednums[i] * 0.7 +
      "," +
      sortednums[i] +
      ") 70%, rgb(0, 255," +
      sortednums[i] +
      ") 100%)";
    document.getElementById(bubbleNom).style.background = bg;
    document.getElementById(bubbleNom).style.width = "60px";
    document.getElementById(bubbleNom).style.height = " 60px";
    document.getElementById(bubbleNom).style.borderRadius = "50%";
    document.getElementById(bubbleNom).style.boxshadow =
      " 0 2px 10px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 lightgreen(0, 0, 0, 0.19)";
  }
}
//doSort();
bubbleSort(pickNums());
