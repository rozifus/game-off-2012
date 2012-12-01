/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Level = go.Level || {};

go.Level.Three = {
    title: "Level Three",
    player: { position: { x:0, y:0, z:0 } },
    background: 0xeeccdd,
    win_url: "",
    blocks: [ 
        // color, down, left 
        
        [ go.RED, 3,-1],
        [ go.YELLOW, 0,-2],

        [ go.WHITE, -2, -1],
        [ go.WHITE, -2, -2],

        [ go.WHITE, -1, -1],
        [ go.WHITE, -1, -2],
        [ go.WHITE, -5, -3],
        [ go.WHITE, -4, -4],

        [ go.WHITE, -3, -5],
        [ go.WHITE, -2, -1],
        [ go.WHITE, -2, -2],
        [ go.WHITE, -2, -4],
        
        [ go.WHITE, -1, -4],
        [ go.WHITE, 0, -5],
        [ go.WHITE, 1, -4],
        [ go.WHITE, 2, -3],
        [ go.WHITE, 1, -2],


    ],
};

