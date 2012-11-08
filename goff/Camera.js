 /*
 * HexGL
 * @author Thibaut 'BKcore' Despoulain <http://bkcore.com>
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. 
 *          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

var CAMERA_DISTANCE = 5;
var CAMERA_HEIGHT = 2;

go.Camera = function(fov, aspect, near, far) {
    THREE.PerspectiveCamera.call(this, fov, aspect, near, far);
    this.target = new THREE.Vector3(0,0,0);
    this.orbit = 0;
}

go.Camera.prototype = Object.create( THREE.PerspectiveCamera.prototype );

go.Camera.prototype.move = function(modOrbit) {
    this.orbit += modOrbit;
    this.position.x = CAMERA_DISTANCE * Math.sin( this.orbit );
    this.position.z = CAMERA_DISTANCE * Math.cos( this.orbit );
    this.lookAt( this.target );
}
