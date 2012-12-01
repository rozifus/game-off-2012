/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Level = go.Level || {};

go.Level.One = {
    title: "Level One",
    player: { position: { x:0, y:0, z:0 } },
    win_message: "Great Work!",
    win_link: "http://rozifus.github.com/game-off-2012/two.html",
    win_link_text: "Go to Level 2",
    blocks: [ 
        [ go.WHITE, 1,0,1 ], 
        [ go.WHITE, 1,0,2 ], 
        [ go.WHITE, 1,0,-1 ], 
        [ go.WHITE, 1,0,-3 ], 
        [ go.WHITE, 1,0,-4 ], 
        [ go.WHITE, 0,0,-4 ], 

        [ go.WHITE, -1,0,1 ], 
        [ go.WHITE, -2,0,2 ], 
        [ go.WHITE, -1,0,2 ], 
        [ go.WHITE, -1,0,-1 ], 
        [ go.WHITE, -1,0,-3 ], 
        [ go.WHITE, -1,0,-4 ], 

        [ go.WHITE, -2,0,-3 ], 
        [ go.WHITE, -3,0,-3 ], 
        [ go.WHITE, -3,0,-2 ], 
        [ go.WHITE, -3,0,-1 ], 
        [ go.WHITE, -3,0,0 ], 
        [ go.WHITE, -3,0,1 ], 
        [ go.WHITE, -2,0,1 ], 
        [ go.WHITE, 2,0,-3 ], 
        [ go.WHITE, 3,0,-3 ], 
        
        [ go.WHITE, 3,0,-2 ], 
        [ go.WHITE, 3,0,-1 ], 
        [ go.WHITE, 3,0,0 ], 
        [ go.WHITE, 3,0,1 ], 
        [ go.WHITE, 3,0,2 ], 
        [ go.WHITE, 3,0,3 ], 
        [ go.WHITE, 3,0,4 ], 

        [ go.WHITE, 3,0,5 ], 
        [ go.WHITE, 2,0,5 ], 
        [ go.WHITE, 1,0,5 ], 
        [ go.WHITE, 0,0,6 ], 

        [ go.WHITE, -1,0,5 ], 
        [ go.WHITE, -1,0,4 ], 
        [ go.WHITE, -2,0,3 ], 
        [ go.WHITE, -2,0,4 ], 

        [ go.YELLOW, 0,0,-1 ], 
        [ go.BLUE, 0,0,1 ], 
        [ go.RED, 0,0,2], 
        [ go.YELLOW, -1,0,0 ], 
        [ go.BLUE, 1,0,0 ], 
        [ go.RED, 0,0,5], 

    ],
};

