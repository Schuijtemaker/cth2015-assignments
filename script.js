console.log("Welcome!");
var image = document.getElementById("image");
var imageNext = 0;
var imageChange = [];
var turn = Math.floor(Math.random() * 4) * 90;
var zoom = 200;
image.style.width = zoom + "px";

//This is the rotate function.
var rotateImage = function (angle) {
    console.log("Click registered (rotate)");
    turn += angle;
    image.style.transform = "rotate(" + turn + "deg)";
    if(turn >= 360 || turn <= -360) {
        turn = 0;
    }
};

//This is the check image function.
var checkImage = function() {
    console.log("Click registered (check)");
    if(turn === 0) {
        if (window.confirm("Yes indeed! This side is up! Would you like to try another one?"));
            getImage(1);
    }
    else {
        window.alert("Almost! Try again!");
    }
};

//This is the zoom function.
var scaleImage = function(scale) {
    console.log("Click registered (zoom)");
    zoom += scale;
    if(zoom <= 50) {
        zoom = 50;
    }
    else if(zoom >= 300) {
        zoom = 300;
    }
    image.style.width = zoom + "px";
};

//This is the next and previous image function.
var getImage = function(imageNextPlus) {
    image.src = "http://www.eurobasket.com/images/loader.gif";
    console.log("Click registered (next)");
    turn = Math.floor(Math.random() * 4) * 90;
    image.style.transform = "rotate(" + turn + "deg)";
    imageNext += imageNextPlus;
    if(imageNext >= imageChange.length) {imageNext = 0;}
    else if(imageNext < 0) {imageNext = imageChange.length - 1;}
    image.src = imageChange[imageNext];
};

//This is were I request the Medieval manuscript pictures from Europeana. 
//I've chosen this kind of images because of three reasons. 
//First and foremost: my historical interests. 
//Second: the fact that the ancient writing style makes it sometimes hard to recognize which side is up.
//Third: I wanted something different than modern art, because most people will probably choose that.
var query = "europeana_collectionName: 2021003*";
var totalImages = 30;
var url = "http://www.europeana.eu/api/v2/search.json?wskey=NHCsNVJXN&query=" + query + "&start=1&rows=" + totalImages + "&profile=standard";
var myRequest = new XMLHttpRequest();
myRequest.open("GET", url);
myRequest.send();

//This function places the images from Europeana into the arrey of the variable 'imageChange'.
myRequest.onreadystatechange = function() {
    console.log("readyState = " + myRequest.readyState);
    if (myRequest.readyState === 4) {
        console.log(myRequest.responseText);
        var parse = JSON.parse(myRequest.responseText);
        var itemsCount = parse.itemsCount;
        for (var i = 0; i < itemsCount; i++) {
            if (typeof parse.items[i].edmPreview != "undefined") {
               imageChange.push(parse.items[i].edmPreview[0]);
            }
        image.src = imageChange[0];
        }
    }
};

