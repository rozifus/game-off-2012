/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Camera = function(fov, aspect, near, far) {
    THREE.PerspectiveCamera.call(this, fov, aspect, near, far);
    this.position.y = go.CAMERA_START_HEIGHT;
    this.target = new THREE.Vector3(0,0,0);
    this.station = go.UP; 
    this.moving = null; 
    this.orbit = go.UP.rad;

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
    if (Math.abs(this.station.rad - this.orbit) < go.CAMERA_SPEED ) {
        return true;
    };
    return false;
}

go.Camera.prototype.shift = function(direction) {
    if (this.atStation()) {
        if (direction == go.LEFT) {
            this.moving = direction;
            this.station = this.station.rotate(3);
        } else if (direction == go.RIGHT) {
            this.moving = direction;
            this.station = this.station.rotate(1);
        } else if (direction == go.DOWN) {
            this.position.y = Math.min(this.position.y + go.CAMERA_SPEED,
                                       go.CAMERA_MAX_HEIGHT);
            this.lookAt(this.target);
        } else if (direction == go.UP) {
            this.position.y = Math.max(this.position.y - go.CAMERA_SPEED, 
                                       go.CAMERA_MIN_HEIGHT); 
            this.lookAt(this.target);
        };
    };
};

go.Camera.prototype.Height = function(direction) {

   }

go.Camera.prototype.update = function() {
    if (this.moving != null) {
        if (this.moving == go.LEFT) {
            this.move(-go.CAMERA_SPEED);
        } else {
            this.move(go.CAMERA_SPEED);
        };
        if (this.atStation()) {
            this.orbit = this.station.rad
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

go.Camera.prototype.translate = function(direction) {
    return direction.rotate(this.station.value);
};
