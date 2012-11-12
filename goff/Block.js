BLOCK_UNIT = 1;
PLAYER_COLOR = 0x222222 || 0x55bbdd;

MOVE_CAMERA = 'MOVE_CAMERA';


var go = go || {};

go.Block = function(opts) {
    this.color = opts.color || go.COLORS.RED;
    this.position = opts.position;

    this.type =  opts.type || go.Block.COLORS.WHITE;
    var size = opts.size || 1;
    if (typeof(size) == 'number') {
        this.size = {x: size, y: size, z: size};
    } else {
        this.size = size;
    };
    this.moving = null;
    this.material = null;
    this.geometry = null;
    this.mesh = null;
};

go.Block.prototype.build = function() {
    this.material = new THREE.MeshBasicMaterial({color: go.COLORS[this.color]});
    this.geometry = new THREE.CubeGeometry(this.size.x, this.size.y, this.size.z);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.position.x * BLOCK_UNIT,
                           this.position.y * BLOCK_UNIT,
                           this.position.z * BLOCK_UNIT);
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



