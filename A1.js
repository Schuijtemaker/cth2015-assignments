var image;
var turn;
var zoom;

$(document).ready(function() {
    console.log("Welcome!");
    image = document.getElementById("image");
    turn = 90;
    zoom = 150;
    image.style.transform = "rotate(" + turn + "deg)";
    image.style.width = zoom + "px";
});

var rotateimage = function (angle) {
    console.log("Rotate click registered");
    turn += angle;
    image.style.transform = "rotate(" + turn + "deg)";
    if(turn >= 360 || turn <= -360) {
        turn = 0;
    }
};

var scaleimage = function(scale) {
    console.log("Zoom click registered");
    zoom += scale;
    image.style.width = zoom + "px";
    if(zoom <= 100) {
        zoom = 100;
    }
    else if(zoom >= 350) {
        zoom = 350;
    }
};
