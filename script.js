console.log("Welcome!");
var image = document.getElementById("image");
var imageNext = 0;
var imageChange = ["http://yatron.kucdweb.com/letterpng/aleph.png", "http://www.i2symbol.com/images/cool-letters/syriac/armenian_capital_letter_eh_u0537_icon_256x256.png", "https://panjewish.files.wordpress.com/2015/09/cuneiform_sumer_dingir.png?w=300", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Devanagari_aa.svg/480px-Devanagari_aa.svg.png", "http://modrodnovery.com/wp-content/uploads/2015/04/600px-Glagolitic_yu.svg_.png", "https://qph.is.quoracdn.net/main-qimg-8781ad604a303ae4b9917e6b0c2d5eb1?convert_to_webp=true", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Li_%28%E6%9D%8E%29.svg/1024px-Li_%28%E6%9D%8E%29.svg.png"];
var turn = Math.floor(Math.random() * 4) * 90;
var zoom = 200;
image.style.transform = "rotate(" + turn + "deg)";
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

//This is the check image/letter function.
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
    else if(zoom >= 350) {
        zoom = 350;
    }
    image.style.width = zoom + "px";
};

//This is the next image/letter function.
var getImage = function(imageNextPlus) {
    console.log("Click registered (next)");
    turn = Math.floor(Math.random() * 4) * 90;
    image.style.transform = "rotate(" + turn + "deg)";
    imageNext += imageNextPlus;
    if(imageNext >= imageChange.length) {imageNext = 0;}
    image.src = imageChange[imageNext];
};
