let playing = false;
let slideNumber = 0;
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
    playing = !playing;
    document.getElementById("auto-on").style.backgroundColor = playing ? 
    'rgba(61,153,112, 0.7)' : 
    'rgba(247,63,58, 0.7)';
}

function setOffset(slideNumber){
    offset = (-720 * slideNumber) + "px";
    document.getElementById("imageBox").style.left = offset;
}

function setSlideNumber(n){
    document.getElementById(`carBut${slideNumber}`).style.backgroundColor = '#166088';
    document.getElementById(`carBut${n}`).style.backgroundColor = '#a1cdf4';
    slideNumber = n;
    setOffset(slideNumber);
}

document.onkeydown = function(event) {
    if(event.keyCode == 37){
        if (slideNumber == 0) {n = 5}
        else (n = slideNumber - 1)
        setSlideNumber(n);
    }
    else if(event.keyCode == 39){
        if (slideNumber == 5) {n = 0}
        else (n = slideNumber + 1)
        setSlideNumber(n);
    }
    else if(event.keyCode == 32){
        event.preventDefault();
        autoplay();
    }
    else if(event.keyCode == 49){
        setSlideNumber(0);
    }
    else if(event.keyCode == 50){
        setSlideNumber(1);
    }
    else if(event.keyCode == 51){
        setSlideNumber(2);
    }
    else if(event.keyCode == 52){
        setSlideNumber(3);
    }
    else if(event.keyCode == 53){
        setSlideNumber(4);
    }
    else if(event.keyCode == 54){
        setSlideNumber(5);
    }
}
setInterval(updateImage, 2000);