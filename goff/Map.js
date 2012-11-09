
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
        this.blocks.push(newBlock);
        this.scene.add(newBlock.mesh);
    };

};

go.Map.prototype.update = function() {
    this.player.update();
    this.camera.update();
}

go.Map.prototype.processKeys = function(keys) {
    if (keys.left) {
        this.camera.shift('left');
    };
    if (keys.right) {
        this.camera.shift('right');
    };
    if (keys.push) {
        this.player.shift(go.DIRECTION[0]);
    };
    if (keys.pull) {
        this.player.shift(go.DIRECTION[1]);
    };
    if (keys.ghost) {
        this.player.shift(go.DIRECTION[2]);
    };
    if (keys.camera) {
        this.player.shift(go.DIRECTION[3]);
    };
};

go.Map.prototype.getBlockAt = function(position) {
    position.x = position.x == 'undefined' ? 0 : position.x
    position.y = position.y == 'undefined' ? 0 : position.y
    position.z = position.z == 'undefined' ? 0 : position.z
    for (var b=0; b<this.blocks.length; b++) {
        if (this.blocks[b].position == position) {
            return this.blocks[b];
        };
    };
    return null;
};



