/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.init = function(opts) {

    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;

    if (opts) {
        var level = opts.level || "DEFAULT";
    }

    container = document.getElementById("main");

    gameInstance = new go.GameOff({
        document: document,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        container: container,
        level: level,
    });

    gameInstance.start();
};

