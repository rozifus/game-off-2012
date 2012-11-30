/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Player = function(opts) {
    go.Unit.call(this, opts);
};

go.Player.prototype = Object.create( go.Unit.prototype );

go.Player.prototype.build = function() {
    this.material = new THREE.MeshLambertMaterial({color: go.PLAYER_COLOR});
    //this.geometry = new THREE.SphereGeometry(BLOCK_UNIT / 2, 20, 20);
    this.geometry = new THREE.OctahedronGeometry(this.size.x / 2.05 , 2);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.updateMesh();
};

go.Player.prototype.isPushable = function() { return true; };


