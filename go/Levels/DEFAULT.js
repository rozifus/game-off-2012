/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Level = go.Level || {};

go.Level.DEFAULT = {
    title: "Default Level",
    player: { position: {x:1, y:0, z:0} },
    blocks: [ 
        { color: go.BLUE, position: {x:0,y:0,z:0}, size: 1 },
        { color: go.RED, position: {x:1,y:0,z:1}, size: 1 },
        { color: go.GREEN, position: {x:-1,y:0,z:-1}, size: 1 },
        { color: go.YELLOW, position: {x:-2,y:0,z:2}, size: 1 },
        { color: go.PURPLE, position: {x:-2,y:0,z:1}, size: 1 },
        { color: go.ORANGE, position: {x:1,y:0,z:-1}, size: 1 },

        { color: go.WHITE, position: {x:-3,y:0,z:-3}, size: 1 },
        { color: go.WHITE, position: {x:-3,y:0,z:-2}, size: 1 },
        { color: go.WHITE, position: {x:-3,y:0,z:-1}, size: 1 },
        { color: go.WHITE, position: {x:-3,y:0,z:0}, size: 1 },
        { color: go.WHITE, position: {x:-3,y:0,z:1}, size: 1 },
        { color: go.WHITE, position: {x:-3,y:0,z:2}, size: 1 },
        { color: go.WHITE, position: {x:-3,y:0,z:3}, size: 1 },

        { color: go.WHITE, position: {x:3,y:0,z:-3}, size: 1 },
        { color: go.WHITE, position: {x:3,y:0,z:-2}, size: 1 },
        { color: go.WHITE, position: {x:3,y:0,z:-1}, size: 1 },
        { color: go.WHITE, position: {x:3,y:0,z:0}, size: 1 },
        { color: go.WHITE, position: {x:3,y:0,z:1}, size: 1 },
        { color: go.WHITE, position: {x:3,y:0,z:2}, size: 1 },
        { color: go.WHITE, position: {x:3,y:0,z:3}, size: 1 },
        
        { color: go.WHITE, position: {x:-2,y:0,z:-3}, size: 1 },
        { color: go.WHITE, position: {x:-1,y:0,z:-3}, size: 1 },
        { color: go.WHITE, position: {x:0,y:0,z:-3}, size: 1 },
        { color: go.WHITE, position: {x:1,y:0,z:-3}, size: 1 },
        { color: go.WHITE, position: {x:2,y:0,z:-3}, size: 1 },

        { color: go.WHITE, position: {x:-2,y:0,z:3}, size: 1 },
        { color: go.WHITE, position: {x:-1,y:0,z:3}, size: 1 },
        { color: go.WHITE, position: {x:0,y:0,z:3}, size: 1 },
        { color: go.WHITE, position: {x:1,y:0,z:3}, size: 1 },
        { color: go.WHITE, position: {x:2,y:0,z:3}, size: 1 },
    ],
};

