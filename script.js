let playing = false;
let slideNumber = -1;
let offset = "";

function updateImage() {
    if (playing) {            
        if (slideNumber == 5){
            setSlideNumber(0);
        } else {
            setSlideNumber(slideNumber + 1);
        }
    }
}

function autoplay() {
    if (playing) {
        playing = false;
        document.getElementById("autoplay-button").style.backgroundColor = 'rgba(247,63,58, 0.7)';
    } else {
        playing = true;
        document.getElementById("autoplay-button").style.backgroundColor = 'rgba(61,153,112, 0.7)';
    }
};

function setOffset(slideNumber){
    offset = "" + (-720 * slideNumber) + "px";
    document.getElementById("imageBox").style.left = offset;
}

function setSlideNumber(n){
    if (slideNumber !== -1) {
        document.getElementById(`carBut${slideNumber}`).style.backgroundColor = 'white';
    }
    document.getElementById(`carBut${n}`).style.backgroundColor = 'red';
    console.log(slideNumber)
    slideNumber = n;
    setOffset(slideNumber);
}

setInterval(updateImage, 2000);