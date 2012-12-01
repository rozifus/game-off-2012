/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Level = go.Level || {};

go.Level.Practice = {
    title: "Practice Level",
    player: { position: { x:5, y:0, z:0 } },
    win_message: "You're Ready!",
    win_link: "http://rozifus.github.com/game-off-2012/one.html",
    win_link_text: "Go to Level 1",
    background: 0xeeddcc,
    blocks: [
        [ go.RED, -1, 2],
        [ go.GREEN, -1, -2],

        [ go.YELLOW, -3, 2],
        [ go.BLUE, -3, 0],
        [ go.RED, -3, -2],

        [ go.PURPLE, 1, -2],
        [ go.YELLOW, 1, 0],
        [ go.WHITE, 1, 2],

        [ go.WHITE, 3, -2], 
        [ go.BLUE, 3, 0], 
        [ go.ORANGE, 3, 2], 

        [ go.WHITE, 6, -5], 
        [ go.WHITE, 6, -4], 
        [ go.WHITE, 6, -3], 
        [ go.WHITE, 6, -2], 
        [ go.WHITE, 6, -1], 
        [ go.WHITE, 6, 0], 
        [ go.WHITE, 6, 1], 
        [ go.WHITE, 6, 2], 
        [ go.WHITE, 6, 3], 
        [ go.WHITE, 6, 4], 

        [ go.WHITE, 6, 5], 

        [ go.WHITE, 5, 5], 
        [ go.WHITE, 4, 5], 
        [ go.WHITE, 3, 5], 
        [ go.WHITE, 2, 5], 
        [ go.WHITE, 1, 5], 
        [ go.WHITE, 0, 5], 
        [ go.WHITE, -1, 5], 
        [ go.WHITE, -2, 5], 
        [ go.WHITE, -3, 5], 
        [ go.WHITE, -4, 5], 
        [ go.WHITE, -5, 5], 

        [ go.WHITE, -6, 5], 

        [ go.WHITE, -6, 4], 
        [ go.WHITE, -6, 3], 
        [ go.WHITE, -6, 2], 
        [ go.WHITE, -6, 1], 
        [ go.WHITE, -6, 0], 
        [ go.WHITE, -6, -1], 
        [ go.WHITE, -6, -2], 
        [ go.WHITE, -6, -3], 
        [ go.WHITE, -6, -4], 

        [ go.WHITE, -6, -5], 

        [ go.WHITE, -6, -5], 
        [ go.WHITE, -5, -5], 
        [ go.WHITE, -4, -5], 
        [ go.WHITE, -3, -5], 
        [ go.WHITE, -2, -5], 
        [ go.WHITE, -1, -5], 
        [ go.WHITE, 0, -5], 
        [ go.WHITE, 1, -5], 
        [ go.WHITE, 2, -5], 
        [ go.WHITE, 3, -5], 
        [ go.WHITE, 4, -5], 
        [ go.WHITE, 5, -5], 
    ],
};

