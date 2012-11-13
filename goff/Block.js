var go = go || {};

go.Block = function(opts) {
    go.Unit.call(this, opts);
    this.color = opts.color || go.COLORS.RED;
    this.type =  opts.type || go.Block.COLORS.WHITE;
};

go.Block.prototype = Object.create( go.Unit.prototype );

go.Block.prototype.build = function() {
    this.material = new THREE.MeshBasicMaterial({color: go.COLORS[this.color]});
    this.geometry = new THREE.CubeGeometry(this.size.x, this.size.y, this.size.z);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.updateMesh();
}

go.Block.COLORS = {
    WHITE:  {red: false, yellow: false, blue: false},
    RED:    {red: true, yellow: false, blue: false},
    YELLOW: {red: false, yellow: true, blue: false},
    BLUE:   {red: false, yellow: false, blue: true},
    ORANGE: {red: true, yellow: true, blue: false},
    PURPLE: {red: true, yellow: false, blue: true},
    GREEN:  {red: false, yellow: true, blue: true},
    BLACK:  {red: true, yellow: true, blue: true},
};



