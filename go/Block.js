var go = go || {};

go.Block = function(opts) {
    go.Unit.call(this, opts);
    this.color = opts.color || go.WHITE;
    this.merging = null;
};

go.Block.prototype = Object.create( go.Unit.prototype );

go.Block.prototype.build = function() {
    this.material = new THREE.MeshBasicMaterial({color: this.color.value});
    this.geometry = new THREE.CubeGeometry(this.size.x, this.size.y, this.size.z);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.updateMesh();
}

go.Block.prototype.isPushable = function() {
    if (go.COLOR.canPush(this.color)) { return true; };
    return false;
};

go.Block.prototype.isGhostable = function() {
    if (go.COLOR.canGhost(this.color)) { return true; };
    return false;
};

go.Block.prototype.isPullable = function() {
    if (go.COLOR.canPull(this.color)) { return true; };
    return false;
};
