/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

BLOCK_UNIT = 1;
PLAYER_COLOR = 0x55bbdd;

MOVE_CAMERA = 'MOVE_CAMERA';


var go = go || {};

go.Map = function(manager, opts) {
    var opts = opts || {};
    var level = opts.level || "DEFAULT";
    this.level = go.Level[level];
    this.width = opts.width == undefined ? window.innerWidth : opts.width;
	this.height = opts.height == undefined ? window.innerHeight : opts.height;
    this.blocks = [];
    this.scene = new THREE.Scene();
    this.camera = new go.Camera(75, this.width/this.height, 0.1, 1000);
    this.finished = false;

    this.player = new go.Player(this.level.player);
    this.player.build();
    this.scene.add(this.player.mesh);

    manager.add("map", this.scene, this.camera, this.render, {}); 
};

go.Map.prototype.render = function(delta, renderer) {
    renderer.render(this.scene, this.camera);
};

go.Map.prototype.loadBlocks = function(blocks) {
    var blocks = this.level.blocks;;
    for (var i=0; i< blocks.length; i++) {
        var newBlock;
        if (Object.prototype.toString.call(blocks[i]) === '[object Array]' ){
            newBlock = new go.Block( {
                color: blocks[i][0],
                position: { x: blocks[i][1],
                            y: blocks[i].length == 4 ? blocks[i][2] : 0,
                            z: blocks[i].length == 4 ? blocks[i][3] : blocks[i][2], },
                size: 1
            } );
        } else { 
            newBlock = new go.Block(blocks[i]);
        };
        newBlock.build();
        this.blocks.push(newBlock);
        this.scene.add(newBlock.mesh);
    };

};

go.Map.prototype.unghosthack = function() {
    for (var b=0; b<this.blocks.length; b++) {
        if (this.blocks[b].position.x != this.player.position.x ||
            this.blocks[b].position.z != this.player.position.z) {
            this.blocks[b].unghost();
        };
    };
};

go.Map.prototype.allBlackBlocks = function() {
    for (var b=0; b<this.blocks.length; b++) {
        if ( !(this.blocks[b].color == go.BLACK) &&
             !(this.blocks[b].color == go.WHITE) ) {
            return false;
        };
    };
    return true;
};

go.Map.prototype.update = function() {
    if (this.finished) { return; };
    if (this.allBlackBlocks()) {
        this.finished = true;
        showWinner(this.level.win_message, 
                   this.level.win_link_text, 
                   this.level.win_link);
    }
    this.player.update();
    this.camera.update();
    var killblocks = []
    for (var b=0; b<this.blocks.length; b++) {
        this.blocks[b].update();
        if (this.blocks[b].kill) {
            killblocks.push(b);
        };
    };
    for (var i = killblocks.length-1; i>=0; i--) {
        var b = killblocks[i];
        this.scene.remove(this.blocks[b].mesh);
        this.blocks.splice(b,1);
    };
};

go.Map.prototype.processKeys = function(keys) {
    if (this.player.moving) { 
        return; 
    } else { 
        this.unghosthack() 
    };

    if (keys.push) {
        if (keys.up) {
            this.push(this.camera.translate(go.DOWN));
        };
        if (keys.right) {
            this.push(this.camera.translate(go.LEFT));
        };
        if (keys.down) {
            this.push(this.camera.translate(go.UP));
        };
        if (keys.left) {
            this.push(this.camera.translate(go.RIGHT));
        };
    } else if (keys.pull) {
        if (keys.up) {
            this.pull(this.camera.translate(go.DOWN));
        };
        if (keys.right) {
            this.pull(this.camera.translate(go.LEFT));
        };
        if (keys.down) {
            this.pull(this.camera.translate(go.UP));
        };
        if (keys.left) {
            this.pull(this.camera.translate(go.RIGHT));
        };
    } else if (keys.camera) {
        if (keys.left) {
            this.camera.shift(go.LEFT);
        };
        if (keys.right) {
            this.camera.shift(go.RIGHT);
        };
        if (keys.up) {
            this.camera.shift(go.UP);
        };
        if (keys.down) {
            this.camera.shift(go.DOWN);
        };
    } else {
        if (keys.up) {
            this.move(this.camera.translate(go.DOWN));
        };
        if (keys.right) {
            this.move(this.camera.translate(go.LEFT));
        };
        if (keys.down) {
            this.move(this.camera.translate(go.UP));
        };
        if (keys.left) {
            this.move(this.camera.translate(go.RIGHT));
        };
    };
};

go.Map.prototype.moveUnit = function(unit, direction) {
    if (!this.getAdjacentUnit(unit, direction)) {
        unit.shift(direction);
        return true;
    };
    return false;
};

go.Map.prototype.move = function(direction) {
    var adjUnit = this.getAdjacentUnit(this.player, direction);
    if (adjUnit == null) { 
        this.player.shift(direction);
    } else if (adjUnit.color.canGhost()) {
        this.player.shift(direction);
        adjUnit.ghost();
    };
};
        

go.Map.prototype.push = function(direction) {
    var adjUnit = this.getAdjacentUnit(this.player, direction);
    if (adjUnit == null) { return; }
    if (this.pushUnit(adjUnit, direction)) {
        this.player.shift(direction);
    };
}

go.Map.prototype.pushUnit = function(unit, direction) {
    if (unit.color.canPush() == false) { return false }; 
    var adjUnit = this.getAdjacentUnit(unit, direction);
    if (adjUnit == null) { 
        unit.shift(direction);
        return true;
    } else if (unit.color.canMerge(adjUnit.color)) {
        this.merge(unit, adjUnit, direction);
        return true;
    } else {
        return false;
    };
};

go.Map.prototype.merge = function(moveUnit, sitUnit, direction) {
    moveUnit.merging = direction;
    moveUnit.shift(direction);
    sitUnit.morphColor(moveUnit.color.join(sitUnit.color));
};

go.Map.prototype.pull = function(direction) {
    var revUnit = this.getAdjacentUnit(this.player, direction.reverse());
    if (revUnit == null || !revUnit.color.canPull()) { return; };
    var adjUnit = this.getAdjacentUnit(this.player, direction);
    if (adjUnit == null) {
        if (this.pullUnit(revUnit, direction)) {
            this.player.shift(direction);
        };
    } else if (adjUnit.color.canGhost()) {
        if (this.pullUnit(revUnit, direction)) {
            this.player.shift(direction);
            adjUnit.ghost();
        };
    };
}

go.Map.prototype.pullUnit = function(unit, direction) {
    var adjUnit = this.getAdjacentUnit(unit, direction);
    if (adjUnit == null) { 
        unit.shift(direction);
        return true; 
    } else if (unit.color.canMerge(adjUnit.color)) {
        this.merge(unit, adjUnit, direction);
        return true;
    } else {
        return false;
    };
};

go.Map.prototype.getAdjacentUnit = function(unit, direction) {
    return this.getBlockAt(
        { x: unit.position.x + (direction.axis == 'x' ? direction.sign : 0),
          y: unit.position.y,
          z: unit.position.z + (direction.axis == 'z' ? direction.sign : 0) } 
    );
};

go.Map.prototype.getBlockAt = function(position) {
    position.x = position.x == 'undefined' ? 0 : position.x
    position.y = position.y == 'undefined' ? 0 : position.y
    position.z = position.z == 'undefined' ? 0 : position.z
    for (var b=0; b<this.blocks.length; b++) {
        if ( this.blocks[b].position.x == position.x &&
             this.blocks[b].position.z == position.z ) { 
            return this.blocks[b]; 
        };
    };
    return null;
};



