let colors = ["red", "orange", "yellow", "green", "blue", "cyan", "purple", "coral", "chocolate", "black", "gray", "white"];
let strokeStatus = ["Current Pen Size: Normal", "Current Pen Size: Large", "Current Pen Size: Huge.", "Current Pen Size: Tiny."]
let strokeSizes = [5, 10, 15, 1];
let currentColor = 0;
let currentStroke = 0;
let isErasing = false;
let keyBuffer = 0;
// here are the HTML h1 elements that make up the status bar.
let colorLabel = document.getElementById("colorlabel");
let strokeLabel = document.getElementById("strokelabel");
let eraserLabel = document.getElementById("eraserlabel");








function setup() {
  createCanvas(2000, 2000);
}

function eraserOn() {
  console.log("Eraser is ON.");
  eraserLabel.textContent = "Eraser is ON.";

}


async function eraserOff() {
  eraserLabel.textContent = "Eraser has been turned OFF."
  console.log("Eraser has been turned OFF.");

}


colorLabel.style.color = colors[0];
strokeLabel.textContent = strokeStatus[0];
document.addEventListener('keydown', function(event) {

  // if we reach the end of the array of colors, we set it to negative one, this will in turn be red (which is zero) when the user wants to change the color again.
  // this also helps when javascript wants to freak out about a indexed color that doesn't exist.
  // we are removing from 2 instead of 1 because white is the last color and it is reserved for the eraser.
  if (currentColor == colors.length - 2) {


    currentColor = -1;

  }




  // pretty much what we did earlier with the colors.
  if (currentStroke > strokeSizes.length - 1) {
    currentStroke = 0;
  }



  /*  if (event.keyCode == 69 && isErasing && keyBuffer == 2) {
     console.log("Eraser has been turned OFF.");
     isErasing = false;
     currentColor = 0;
 
 
   } */




  switch (event.keyCode) {
    case 72:
      alert("Welcome to Paint Program by CodingBird874. use K to change color, E to erase, and R to change stroke size. use H to show this menu again.");
      break;
    case 78:
      alert("test");
      break;
    // We are getting input from user from an event, if it is equal to 75 (K key) we change the current index in the array.

    case 75:
      if (!isErasing) {
        currentColor++;



        colorLabel.style.color = colors[currentColor];


        console.log(currentColor);

      }
      break;

    // just like the color, we see what key (R) is being pressed and then we change the stroke size.

    case 82:
      currentStroke++;

      if (currentStroke > strokeSizes.length - 1) {
        currentStroke = 0;
      }

      strokeLabel.textContent = strokeStatus[currentStroke];





      break;
    // key buffer prevents the erasing from being turned on and then immediately turned off again.

    case 69:
      // here we see if the E key has been pressed, if so, we set stroke color to white (easiest way of erasing don't blame me) and add the Keybuffer.

      keyBuffer++;
      if (!isErasing) {
        isErasing = true;
        currentColor = 11;
        eraserOn();

      } else if (isErasing && keyBuffer >= 2) {
        /* since our key buffer must be 2  (equal to two button presses) for the eraser to go away, the eraser is turned off. It is also >= in case for
        keybuffer is whatever reason more than 2. */

        isErasing = false;
        currentColor = 0;
        eraserOff();


      }
      console.log(keyBuffer);


  }
});




// used for drawing lines 
function drawLine() {
  strokeWeight(strokeSizes[currentStroke]);
  stroke(colors[currentColor])
  if (mouseIsPressed === true) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}


function draw() {


  drawLine();

  //background("teal");

}
;
