
BLOCK_UNIT = 1;
PLAYER_COLOR = 0x55bbdd;

MOVE_CAMERA = 'MOVE_CAMERA';


var go = go || {};

go.Map = function(manager, opts) {
    var opts = opts || {};
    this.operation = null; 
    this.width = opts.width == undefined ? window.innerWidth : opts.width;
	this.height = opts.height == undefined ? window.innerHeight : opts.height;
    this.blocks = [];
    this.scene = new THREE.Scene();
    this.camera = new go.Camera(75, this.width/this.height, 0.1, 1000);

    this.player = new go.Player({position: {x:1, y:0, z:0}});
    this.player.build();
    this.scene.add(this.player.mesh);

    manager.add("map", this.scene, this.camera, this.render, {}); 
};

go.Map.prototype.update = function() {
};


go.Map.prototype.render = function(delta, renderer) {
    renderer.render(this.scene, this.camera);
};

go.Map.prototype.loadBlocks = function(blocks) {
    var blocks = blocks || go.Dev.BLOCKS;
    for (var i=0; i< blocks.length; i++) {
        var newBlock = new go.Block(blocks[i]);
        newBlock.build();
        this.blocks.push(newBlock);
        this.scene.add(newBlock.mesh);
    };

};

go.Map.prototype.update = function() {
    // unghosting hacky but should work
    
    if (!this.player.moving) {
        for (var b=0; b<this.blocks.length; b++) {
            if (this.blocks[b].position.x != this.player.position.x ||
                this.blocks[b].position.z != this.player.position.z) {
                this.blocks[b].unghost();
            };
        };
    };

    this.player.update();
    this.camera.update();
    for (var b=0; b<this.blocks.length; b++) {
        this.blocks[b].update();
    }
}

go.Map.prototype.processKeys = function(keys) {
    if (this.player.moving) { return; };
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
    } else if (adjUnit.color.ghost) {
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
    if (unit.color.push == false) { return false }; 
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

};

go.Map.prototype.pull = function(direction) {
    var revUnit = this.getAdjacentUnit(this.player, direction.reverse());
    if (revUnit == null || !revUnit.color.pull) { return; };
    var adjUnit = this.getAdjacentUnit(this.player, direction);
    if (adjUnit == null) {
        revUnit.shift(direction);
        this.player.shift(direction);
    } else if (adjUnit.color.ghost) {
        revUnit.shift(direction);
        this.player.shift(direction);
        adjUnit.ghost();
    };
}

go.Map.prototype.pullUnit = function(unit, direction) {
    var adjUnit = this.getAdjacentUnit(unit, direction);
    if (adjUnit) { return false; }
    var revUnit = this.getAdjacentUnit(unit, direction.reverse());
    if (!revUnit || !revUnit.isPullable()) { return false; }
    revUnit.shift(direction);
    unit.shift(direction);
};

go.Map.prototype.getAdjacentUnit = function(unit, direction) {
    console.log(unit, direction);
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



