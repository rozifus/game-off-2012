/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Level = go.Level || {};

go.Level.Two = {
    title: "Level Two",
    player: { position: { x:0, y:0, z:-2 } },
    blocks: [ 

        // color, down, left 
        [ go.RED, -2,-1 ], 
        [ go.BLUE, -1,-1 ], 
        [ go.YELLOW, 1,0 ], 

        [ go.BLUE, -2,1],
        [ go.YELLOW, -4,1],

        [ go.RED, -1,1],

        [ go.GREEN, 0,-3],
        [ go.RED, 1,2],

        [ go.WHITE, -1,0 ], 
        [ go.WHITE, -2,0 ], 
        [ go.WHITE, -2,-2 ], 
        [ go.WHITE, -3,-2 ], 
        [ go.WHITE, -4,-2 ], 
        [ go.WHITE, -5,-1 ], 
        [ go.WHITE, -6,0 ], 
        [ go.WHITE, 1,-2 ], 
        [ go.WHITE, 1,-3 ], 
        [ go.WHITE, 1,-4 ], 
        [ go.WHITE, 0,-5 ], 
        [ go.WHITE, -1,-4 ], 
        [ go.WHITE, -1,-3 ], 
        [ go.WHITE, -1,-2 ], 
        [ go.WHITE, 2,-2 ], 
        [ go.WHITE, 3,-1 ], 
        [ go.WHITE, 2,0 ], 
        [ go.WHITE, 3,1 ], 
        [ go.WHITE, 0,3], 
        [ go.WHITE, 1,3 ], 
        [ go.WHITE, 2,2 ], 
        [ go.WHITE, -1,3 ], 
        [ go.WHITE, -2,2 ], 
        [ go.WHITE, -3,2 ], 
        [ go.WHITE, -4,2 ], 
        [ go.WHITE, -5,2 ], 
        [ go.WHITE, -6,2 ], 
        [ go.WHITE, -7,1 ], 

    ],
};

