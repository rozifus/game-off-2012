
var go = go || {};

go.Direction = function(opts) {
    this.value = opts.value;
    this.axis = opts.axis;
    this.sign = opts.sign;
    this.rad = opts.rad;
    if (go.DIR) { go.DIR.push(this) };
};

go.Direction.prototype.add = function(direction) {
    return (this.value + direction % go.DIR.length);
};

go.Direction.prototype.rotate = function(value) {
    return go.DIR[(this.value + value) % go.DIR.length];
};

go.Direction.prototype.reverse = function() {
    return this.rotate(go.DIR.length / 2);
};

go.DIR = [];

go.RIGHT = new go.Direction( {value: 0, axis: 'x', sign: -1, rad: 0} );
go.UP = new go.Direction( {value: 1, axis: 'z', sign: 1, rad: Math.PI / 2} );
go.LEFT = new go.Direction( {value: 2, axis: 'x', sign: 1, rad: Math.PI} );
go.DOWN = new go.Direction( {value: 3, axis: 'z', sign: -1, rad: 3 * Math.PI / 2} );

