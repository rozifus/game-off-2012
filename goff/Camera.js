 /*
 * HexGL
 * @author Thibaut 'BKcore' Despoulain <http://bkcore.com>
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. 
 *          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Camera = function(fov, aspect, near, far) {
    THREE.PerspectiveCamera.call(this, fov, aspect, near, far);
    this.position.y = go.CAMERA_HEIGHT;
    this.target = new THREE.Vector3(0,0,0);
    this.station = 0; 
    this.moving = null; 
    this.orbit = 0;

    this.move(0);
    this.lookAt(this.target);
}

go.Camera.prototype = Object.create( THREE.PerspectiveCamera.prototype );

go.Camera.prototype.recalc = function() {
    this.position.x = go.CAMERA_DISTANCE * Math.sin( this.orbit );
    this.position.z = go.CAMERA_DISTANCE * Math.cos( this.orbit );
    this.lookAt( this.target );
};

go.Camera.prototype.atStation = function() {
    if (Math.abs(go.DIRECTION[this.station].rad - this.orbit) < go.CAMERA_SPEED ) {
        return true;
    };
    return false;
}

go.Camera.prototype.shift = function(direction) {
    if (this.atStation()) {
        this.moving = direction;
        if (direction == go.LEFT) {
            this.station = (this.station + go.DIRECTION.length - 1) % go.DIRECTION.length;
        } else {
            this.station = (this.station + 1) % go.DIRECTION.length;
        };
    };
};

go.Camera.prototype.update = function() {
    if (this.moving != null) {
        if (this.moving == go.LEFT) {
            this.move(-go.CAMERA_SPEED);
        } else {
            this.move(go.CAMERA_SPEED);
        };
        if (this.atStation()) {
            this.orbit = go.DIRECTION[this.station].rad
            this.recalc();
            this.moving = null;
        };
    };
};

go.Camera.prototype.move = function(modOrbit) {
    this.orbit = (this.orbit + modOrbit) % (2*Math.PI);
    if (this.orbit < 0) { this.orbit += 2*Math.PI };
    this.recalc();
}
go.Camera.prototype.init = function() {
    this.recalc();
};
