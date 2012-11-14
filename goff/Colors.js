
var go = go || {};

go.COLOR = function(opts) {
    this.value =  opts.value;
    this.pull = opts.pull;
    this.push = opts.push;
    this.ghost = opts.ghost;
};

go.COLOR.prototype.canMerge = function(color) {
    return !!( (this.pull ^ color.pull) && 
               (this.push ^ color.push) &&
               (this.ghost ^ color.ghost) )
};

go.WHITE    =   new go.COLOR({ value: 0xc0c0c0, pull: false, push: false, ghost: false });
go.RED      =   new go.COLOR({ value: 0xc31c1c, pull: true,  push: false, ghost: false });
go.YELLOW   =   new go.COLOR({ value: 0xc3be1c, pull: false, push: true,  ghost: false });
go.BLUE     =   new go.COLOR({ value: 0x1c67c3, pull: false, push: false, ghost: true  });
go.ORANGE   =   new go.COLOR({ value: 0xc36f1c, pull: true,  push: true,  ghost: false });
go.GREEN    =   new go.COLOR({ value: 0x52c31c, pull: false, push: true,  ghost: true  });
go.PURPLE   =   new go.COLOR({ value: 0x8f1cc3, pull: true,  push: false, ghost: true  });
go.BLACK    =   new go.COLOR({ value: 0x252525, pull: true,  push: true,  ghost: true  });


