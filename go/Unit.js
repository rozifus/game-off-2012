/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

BLOCK_UNIT = 1;
PLAYER_COLOR = 0x222222 || 0x55bbdd;

MOVE_CAMERA = 'MOVE_CAMERA';


PLAYER_SPEED = 0.05;

var go = go || {};

go.Unit = function(opts) {
    this.position = opts.position;
    var size = opts.size || BLOCK_UNIT;
    if (typeof(size) == 'number') {
        this.size = {x: size, y: size, z: size};
    } else {
        this.size = size;
    };
    this.moving = null;
    this.coloring = null;
    this.actionClock = -1;
    this.material = null;
    this.geometry = null;
    this.mesh = null;
};

go.Unit.prototype.build = function() {
    this.material = new THREE.MeshBasicMaterial( { color: '0xff0000' } );
    this.geometry = new THREE.SphereGeometry(this.size, 20, 20);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
};

go.Unit.prototype.updateMesh = function() {
    this.mesh.position.set( this.position.x * BLOCK_UNIT,
                            this.position.y * BLOCK_UNIT,
                            this.position.z * BLOCK_UNIT );
}

go.Unit.isPushable = function() { return false; };

go.Unit.prototype.update = function() {
    this.actionClock = Math.max(-1, this.actionClock - 1);
    if (this.moving) {
        this.mesh.position[this.moving.axis] += (this.moving.sign * PLAYER_SPEED);
    };
    if (this.merging) {
       ; this.mesh.scale.set(this.merging.axis == 'x' ? 1.0 : this.mesh.scale.x * 0.95,
                            this.mesh.scale.y * 0.95,
                            this.merging.axis == 'z' ? 1.0 : this.mesh.scale.z * 0.95);
    };
    if (this.coloring) {
        this.material.color.r = this.color.r * (20 - this.actionClock) / 20 +
                            this.coloring.r * this.actionClock / 20;
        this.material.color.g = this.color.g * (20 - this.actionClock) / 20 +
                            this.coloring.g * this.actionClock / 20;
        this.material.color.b = this.color.b * (20 - this.actionClock) / 20 +
                            this.coloring.b * this.actionClock / 20;
    };
    if (this.actionClock == 0) {
        this.actionClock == -1;
        if (this.moving) { 
            this.updateMesh() 
            this.moving = null;
        };
        if (this.merging) { 
            this.merging = null; 
            this.kill = true;
        };
        if (this.coloring) { 
            this.material.color.setHex(this.color.getHex());
            this.coloring = null;
        }
    };
};

go.Unit.prototype.shift = function(direction) {
    if (this.meshAtPosition()) {
        this.moving = direction;
        this.position[direction.axis] += direction.sign;
        this.actionClock = 1 / PLAYER_SPEED;
    };
}

go.Unit.prototype.meshAtPosition = function() {
    if (!this.moving) { return true; }
    if (Math.abs(this.mesh.position[this.moving.axis] 
                 - this.position[this.moving.axis] * go.BLOCK_UNIT) 
        <= PLAYER_SPEED) {
            return true;
    }; 
    return false;
}

go.Unit.prototype.ghost = function() {
    this.material.opacity = 0.5; 
}

go.Unit.prototype.unghost = function() {
    this.material.opacity = 1.0;
};




