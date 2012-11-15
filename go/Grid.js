
BLOCK_UNIT = 1;
PLAYER_COLOR = 0x55bbdd;

MOVE_CAMERA = 'MOVE_CAMERA';


var go = go || {};

go.Grid = function() {
    var opts = opts || {};
    this.operation = null; 
    this.width = opts.width == undefined ? go.DEFAULT_GRID_WIDTH : opts.width;
	this.height = opts.height == undefined ? go.DEFAULT_GRID_HEIGHT : opts.height
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
    var blocks = blocks || test_blocks;
    for (var i=0; i< blocks.length; i++) {
        var newBlock = new go.Block(blocks[i]);
        this.blocks.push(newBlock);
        this.scene.add(newBlock.mesh);
    };

};

go.Map.prototype.update = function() {
    this.camera.update();
}

go.Map.prototype.processKeys = function(keys) {
    if (keys.left) {
        this.camera.shift('left');
    };
    if (keys.right) {
        this.camera.shift('right');
    };
};



