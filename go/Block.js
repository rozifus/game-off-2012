/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Block = function(opts) {
    go.Unit.call(this, opts);
    this.color = opts.color || go.WHITE;
};

go.Block.prototype = Object.create( go.Unit.prototype );

go.Block.prototype.build = function() {
    this.material = new THREE.MeshBasicMaterial({color: this.color});
    this.geometry = new THREE.CubeGeometry(this.size.x, this.size.y, this.size.z);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.updateMesh();
}

go.Block.prototype.isPushable = function() {
    if (this.color == go.BLACK) { return false; };
    if (go.COLOR.canPush(this.color)) { return true; };
    return false;
};

go.Block.prototype.isGhostable = function() {
    if (this.color == go.BLACK) { return false; };
    if (go.COLOR.canGhost(this.color)) { return true; };
    return false;
};

go.Block.prototype.isPullable = function() {
    if (this.color == go.BLACK) { return false; };
    if (go.COLOR.canPull(this.color)) { return true; };
    return false;
};

go.Block.prototype.morphColor = function(color) {
    this.coloring = this.color;
    this.color = color;
    this.actionClock = 20;
};
