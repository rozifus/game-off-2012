
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
    this.player.update();
    this.camera.update();
}

go.Map.prototype.processKeys = function(keys) {
    if (keys.push) {

    } else if (keys.pull) {

    } else if (keys.ghost) { 

    } else if (keys.camera) {
        if (keys.left) {
            this.camera.shift(go.LEFT);
        };
        if (keys.right) {
            this.camera.shift(go.RIGHT);
        };
    } else {
        if (keys.up) {
            this.playerMove(go.DIRECTION.cameraTranslate(go.DOWN, this.camera.station));
        };
        if (keys.right) {
            this.playerMove(go.DIRECTION.cameraTranslate(go.LEFT, this.camera.station));
        };
        if (keys.down) {
            this.playerMove(go.DIRECTION.cameraTranslate(go.UP, this.camera.station));
        };
        if (keys.left) {
            this.playerMove(go.DIRECTION.cameraTranslate(go.RIGHT, this.camera.station));
        };
    };
};

go.Map.prototype.playerMove = function(dir_obj) {
    if (!this.getAdjacentUnit(this.player, dir_obj)) {
        this.player.shift(dir_obj);
    };
};

go.Map.prototype.getAdjacentUnit = function(unit, dir_obj) {
    return this.getBlockAt(
        { x: unit.position.x + (dir_obj.axis == 'x' ? dir_obj.sign : 0),
          y: unit.position.y,
          z: unit.position.z + (dir_obj.axis == 'z' ? dir_obj.sign : 0) } 
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



