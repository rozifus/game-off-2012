/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

musicFiles = [
    "airtone_nightinggale_remixed.ogg",
    "airtone_spacetime.ogg",
    "airtone_ukeSounds.ogg",
    "airtone_winterSunlight.ogg",
    "airtone_h2o_instrumental.ogg",
    "airtone_cloudy.ogg",
] 

nextTrack = function() {
    if (typeof(musicTrack) == 'undefined') {
        musicTrack = new Audio();
        musicTrack.loop = true;
        musicTrackIndex = Math.floor(Math.random() * musicFiles.length);
    } else {
        musicTrackIndex = (musicTrackIndex + 1) % musicFiles.length;
    }; 
    musicTrack.pause();
    musicTrack.src = "music/" + musicFiles[musicTrackIndex];
    musicTrack.play();
};

toggleMusic = function() {
    if (typeof(musicTrack) == 'undefined') {
        nextTrack();
    } else {
        if (musicTrack.paused) { 
            musicTrack.play(); 
        } else {
            musicTrack.pause();
        };
    };
};

showWinner = function(message, winner_link_text, winner_link) {
    document.getElementById('winner').style.visibility = 'visible';
    document.getElementById('winner_message').innerText = message || "You Win!";
    document.getElementById('winner_link').innerText = winner_link_text || "Next";
    document.getElementById('winner_link').href = winner_link || "https://github.com/rozifus/game-off-2012";
};

toggleControls = function() {
    if (!(document.getElementById('controls_panel').style.visibility == "visible")) {
        document.getElementById('controls_panel').style.visibility = "visible";
    } else {
        document.getElementById('controls_panel').style.visibility = "hidden";
    };
    return false;
};
