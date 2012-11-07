 /*
 * HexGL
 * @author Thibaut 'BKcore' Despoulain <http://bkcore.com>
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. 
 *          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var test_blocks = [
    { color: "blue", position: {x:0,y:0,z:0}, size: 1 },
    { color: "red", position: {x:1,y:0,z:1}, size: 1 },
    { color: "green", position: {x:-1,y:0,z:-1}, size: 1 },
];

BLOCK_UNIT = 1;
PLAYER_COLOR = 0x55bbdd;


var go = go || {};

go.COLORS = {
    red:    0xc31c1c,
    green:  0x52c31c,
    blue:   0x1c67c3,
};

go.Block = function(opts) {
    this.color = opts.color || "red";
    this.position = opts.position;
    var size = opts.size || 1;
    if (typeof(size) == 'number') {
        this.size = {x: size, y: size, z: size};
    } else {
        this.size = size;
    };
    this.material = new THREE.MeshBasicMaterial({color: go.COLORS[this.color]});
    this.geometry = new THREE.CubeGeometry(this.size.x, this.size.y, this.size.z);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.position.x * BLOCK_UNIT,
                           this.position.y * BLOCK_UNIT,
                           this.position.z * BLOCK_UNIT);

};

go.Player = function(opts) {
    this.size = BLOCK_UNIT;
    this.position = opts.position;
    this.material = new THREE.MeshBasicMaterial({color: PLAYER_COLOR});
    this.geometry = new THREE.SphereGeometry(this.size / 2, 20, 20);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.position.x * BLOCK_UNIT,
                           this.position.y * BLOCK_UNIT,
                           this.position.z * BLOCK_UNIT);

};


go.Map = function(manager, opts) {
    var opts = opts || {};
    this.width = opts.width == undefined ? window.innerWidth : opts.width;
	this.height = opts.height == undefined ? window.innerHeight : opts.height;
    this.blocks = [];
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.width/this.height, 0.1, 1000);
    this.camera.position.z = 8;
    this.camera.position.y = 5;
    this.camera.lookAt(new THREE.Vector3(0,0,0));

    this.player = new go.Player({position: {x:1, y:0, z:0}});
    this.scene.add(this.player.mesh);

    manager.add("map", this.scene, this.camera, this.render, {}); 

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


