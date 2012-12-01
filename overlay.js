/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

showWinner = function(message, winner_link_text, winner_link) {
    document.getElementById('winner').style.visibility = 'visible';
    document.getElementById('winner_message').innerText = message || "You Win!";
    document.getElementById('winner_link_text').innerText = winner_link_text || "Next";
    document.getElementById('winnder_link').href = winner_link || "https://github.com/rozifus/game-off-2012";
};

toggleControls = function() {
    if (!(document.getElementById('controls_panel').style.visibility == "visible")) {
        document.getElementById('controls_panel').style.visibility = "visible";
    } else {
        document.getElementById('controls_panel').style.visibility = "hidden";
    };
    return false;
};
