
var go = go || {};

go.COLORS = [];


go.Color = function(opts) {
    THREE.Color.call( this, opts.value );
    this.pull = opts.pull;
    this.push = opts.push;
    this.ghost = opts.ghost;
    go.COLORS.push(this);
};

go.Color.prototype = Object.create( THREE.Color.prototype );

go.Color.prototype.canMerge = function(color) {
    if (color == go.WHITE) { return false; };
    return !!( (!(this.pull && color.pull)) && 
               (!(this.push && color.push)) &&
               (!(this.ghost && color.ghost)) )
};

go.Color.prototype.join = function(color) {
    if (!this.canMerge(color)) { throw Error("these blocks can't merge/join!"); };
    var pull = this.pull || color.pull;
    var push = this.push || color.push;
    var ghost = this.ghost || color.ghost;

    return go.Color.find(pull,push,ghost);
};

go.Color.find = function(pull,push,ghost) {
    for (var i=0; i<go.COLORS.length; i++) {
        if (go.COLORS[i].pull == pull &&
            go.COLORS[i].push == push &&
            go.COLORS[i].ghost == ghost) {
            return go.COLORS[i];
        };
    };
    return null
};

go.WHITE    =   new go.Color({ value: 0xc0c0c0, pull: false, push: false, ghost: false });
go.RED      =   new go.Color({ value: 0xc31c1c, pull: true,  push: false, ghost: false });
go.YELLOW   =   new go.Color({ value: 0xc3be1c, pull: false, push: true,  ghost: false });
go.BLUE     =   new go.Color({ value: 0x1c67c3, pull: false, push: false, ghost: true  });
go.ORANGE   =   new go.Color({ value: 0xc36f1c, pull: true,  push: true,  ghost: false });
go.GREEN    =   new go.Color({ value: 0x52c31c, pull: false, push: true,  ghost: true  });
go.PURPLE   =   new go.Color({ value: 0x8f1cc3, pull: true,  push: false, ghost: true  });
go.BLACK    =   new go.Color({ value: 0x252525, pull: true,  push: true,  ghost: true  });

