/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Level = go.Level || {};

go.Level.Simple = {
    title: "Simple Level",
    player: { position: { x:1, y:0, z:0 } },
    win_message: "You're Ready!",
    win_link: "http://rozifus.github.com/game-off-2012/one.html",
    win_link_text: "Go to Level 1",
    background: 0xeeddcc,
    blocks: [
        [ go.RED, -1, 2],
        [ go.BLUE, -1, 0],
        [ go.YELLOW, -1, -2],

        [ go.WHITE, 3, -3], 
        [ go.WHITE, 3, -2], 
        [ go.WHITE, 3, -1], 
        [ go.WHITE, 3, 0], 
        [ go.WHITE, 3, 1], 
        [ go.WHITE, 3, 2], 
        [ go.WHITE, 3, 3], 
       
        [ go.WHITE, -4, -4], 
        [ go.WHITE, -4, -3], 
        [ go.WHITE, -4, -2], 
        [ go.WHITE, -4, -1], 
        [ go.WHITE, -4, 0], 
        [ go.WHITE, -4, 1], 
        [ go.WHITE, -4, 2], 
        [ go.WHITE, -4, 3], 
        [ go.WHITE, -4, 4], 
 
        [ go.WHITE, -3, -4], 
        [ go.WHITE, -2, -4], 
        [ go.WHITE, -1, -4], 
        [ go.WHITE, 0, -4], 
        [ go.WHITE, 1, -4], 
        [ go.WHITE, 2, -4], 
        [ go.WHITE, 3, -4], 
 
        [ go.WHITE, -3, 4], 
        [ go.WHITE, -2, 4], 
        [ go.WHITE, -1, 4], 
        [ go.WHITE, 0, 4], 
        [ go.WHITE, 1, 4], 
        [ go.WHITE, 2, 4], 
        [ go.WHITE, 3, 4], 




    ],
};

