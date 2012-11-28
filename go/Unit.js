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
    if (this.moving) {
        this.mesh.position[this.moving.axis] += (this.moving.sign * PLAYER_SPEED);
    };
    if (this.merging) {
        this.mesh.scale.set(this.merging.axis == 'x' ? 1.0 : this.mesh.scale.x * 0.95,
                            this.mesh.scale.y * 0.95,
                            this.merging.axis == 'z' ? 1.0 : this.mesh.scale.z * 0.95);
    };
    if (this.meshAtPosition()) {
        this.updateMesh();
        this.moving = null;
    };
};

go.Unit.prototype.shift = function(direction) {
    if (this.meshAtPosition()) {
        this.moving = direction;
        this.position[direction.axis] += direction.sign;
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




