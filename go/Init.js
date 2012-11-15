 /*
 * HexGL
 * @author Thibaut 'BKcore' Despoulain <http://bkcore.com>
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. 
 *          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.init = function() {

    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;

    container = document.getElementById("main");

    gameInstance = new go.GameOff({
        document: document,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        container: container,
    });

    gameInstance.init();

    gameInstance.start();
};

