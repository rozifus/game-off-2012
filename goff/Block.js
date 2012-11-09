 /*
 * HexGL
 * @author Thibaut 'BKcore' Despoulain <http://bkcore.com>
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. 
 *          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */
BLOCK_UNIT = 1;
PLAYER_COLOR = 0x222222 || 0x55bbdd;

MOVE_CAMERA = 'MOVE_CAMERA';


var go = go || {};

go.COLORS = {
    RED:    0xc31c1c,
    GREEN:  0x52c31c,
    BLUE:   0x1c67c3,
    ORANGE: 0xc36f1c,
    PURPLE: 0x8f1cc3,
    YELLOW: 0xC3be1c,
    WHITE: 0xc0c0c0,
    BLACK: 0x252525,
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





