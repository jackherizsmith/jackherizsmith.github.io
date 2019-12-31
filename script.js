/* Using JavaScipt knowhow from CodeWars katas and implementing it in a real website has been a lot of fun 
- at times challenging and frustrating, and has given me a new perspective on how much there is to learn...*/

/* Initialise carousel */
let playing = false;
let imgNumber = 0;                          //0-indexed to help with positioning in setOffet()
let offset = "";

/* autoplay() runs every 2 seconds - see setInterval function below */
function autoplay() {                    
    if (playing) {            
        imgNumber == 5 ? setImgNumber(0) : setImgNumber(imgNumber + 1);
    }
}

/* Toggle flips the value of 'playing' and changes the indicator colour */
function toggle() {
    playing = !playing;
    document.getElementById("autoIndicator").style.backgroundColor = playing ? 
    'rgba(61,153,112, 0.7)' :               //olive if on
    'rgba(247,63,58, 0.7)';                 //tomato if off
}

/* Sets the (new) x-coordinate of the row of carousel images */
function setOffset(imgNumber){
    offset = (-720 * imgNumber) + "px";     //saved as string for updating CSS style
    document.getElementById("imageBox").style.left = offset;
}

/* Takes the new slide number and updates the button colours and slideNumber variable */
function setImgNumber(n){
    document.getElementById(`carouselButton${imgNumber}`).style.backgroundColor = '#166088'; //reset last button colour
    document.getElementById(`carouselButton${n}`).style.backgroundColor         = '#a1cdf4'; //set new button colour
    imgNumber = n;
    setOffset(imgNumber);                   //use new slideNumber value to offset images as/if required
}

/* Lots of options for keyboard interaction */
document.onkeydown = function(event) {
    (event.keyCode == 37) ? (imgNumber == 0) ? n = 5 : n = imgNumber - 1 : //left cursor
    (event.keyCode == 39) ? (imgNumber == 5) ? n = 0 : n = imgNumber + 1 : //right cursor
    (event.keyCode >= 49 && event.keyCode <= 54) ? n = event.keyCode-49 : n; //'1' -> '6'
    
    if (event.keyCode == 32){               //space bar
        event.preventDefault();             //prevent page down
        toggle();                           //toggle autoplay
    }
    else {setImgNumber(n);}                 //go to relevant image
}

setInterval(autoplay, 2000);                //check if autoplay is 'on'