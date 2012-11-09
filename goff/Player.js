
var go = go || {};

PLAYER_SPEED = 0.05

go.Player = function(opts) {
    this.size = BLOCK_UNIT;
    this.position = opts.position || {x:0,y:0,z:0};
    this.moving = null;
    this.material = new THREE.MeshBasicMaterial({color: PLAYER_COLOR});
    this.geometry = new THREE.SphereGeometry(this.size / 2, 20, 20);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.position.x * go.BLOCK_UNIT,
                           this.position.y * go.BLOCK_UNIT,
                           this.position.z * go.BLOCK_UNIT);
};

go.Player.prototype.update = function() {
    if (this.moving) {
        this.mesh.position[this.moving.axis] += (this.moving.sign * PLAYER_SPEED);
    };
    if (this.meshAtPosition()) {
        this.moving = null;
    };
};

go.Player.prototype.shift = function(direction) {
    if (this.meshAtPosition()) {
        this.moving = direction;
        this.position[direction.axis] += direction.sign;
        console.log(this.moving);
    };
}

go.Player.prototype.meshAtPosition = function() {
    if (!this.moving) { return true; }
    if (Math.abs(this.mesh.position[this.moving.axis] 
                 - this.position[this.moving.axis] * go.BLOCK_UNIT) 
        <= PLAYER_SPEED) {
            return true;
    }; 
    return false;
}

