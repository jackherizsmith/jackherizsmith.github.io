window.onload = function() {
    let playing = true;

    function updateImage() {
        if (playing) {
            i++;
            if (i>6){i=1}
            window.location.href("https://jackherizsmith.github.io/#carousel-image-");
        }
        window.location.href("https://jackherizsmith.github.io/#carousel")
    }

    var autoplay = document.getElementById("autoplay");
    
    function autoplay() {
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