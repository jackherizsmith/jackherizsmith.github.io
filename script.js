window.onload = function() {
    let playing = true;
    let slideNumber = 0;

    function updateImage() {
        slideNumber = window.location.href.replace(/[\D]/g, '');
        if (playing) {
            slideNumber++;
            if (slideNumber>6){slideNumber=1}
            window.location.href("https://jackherizsmith.github.io/#carousel-image-"+slideNumber);
        }
        window.location.href("https://jackherizsmith.github.io/#carousel")
    }
    
    document.getElementById("autoplay-button").onclick = function(){

        document.getElementById("autoplay-button").style.backgroundColor = 'rgba(61,153,112, 0.7)';
        if (playing) {
            playing = false;
            document.getElementById("autoplay-button").style.backgroundColor = 'rgba(247,63,58, 0.7)';
        } else {
            playing = true;
            document.getElementById("autoplay-button").style.backgroundColor = 'rgba(61,153,112, 0.7)';
        }
    };

    setInterval(updateImage, 1000);
}