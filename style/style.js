// Write all your JavaScript and JQuery code in this file! :)

var x = 0; // rotation of X
var y = 0; // rotation of Y
var z = 0; // rotation of Z

function updateSize(newSize) {
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
  //$("img").eq(0).css(transform: scale(newSize, newSize));
}

function updateRotation() {
  // FINISH ME! Set the rotation of the MEET logo based on the values of (x, y, z) (see above!)

var angle = 20;
$("img").eq(0).css("transform", "rotate3d("+ x +","+ y +" ,"+ z +" , "+ angle+"deg)");
}

function updateXRotation(newX) {
  x = newX*150;
  updateRotation();
}

function updateYRotation(newY) {
  y = newY*150;
  updateRotation();
}

function updateZRotation(newZ) {
  z = newZ*150;
  updateRotation();
}