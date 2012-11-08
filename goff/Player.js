
var go = go || {};

go.Player = function(opts) {
    this.size = BLOCK_UNIT;
    this.position = opts.position;
    this.material = new THREE.MeshBasicMaterial({color: PLAYER_COLOR});
    this.geometry = new THREE.SphereGeometry(this.size / 2, 20, 20);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.position.x * go.BLOCK_UNIT,
                           this.position.y * go.BLOCK_UNIT,
                           this.position.z * go.BLOCK_UNIT);
};




