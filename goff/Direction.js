go.DIRECTION = [ 
    {value: 0, axis: 'x', sign: -1, name: "EAST", rad: 0},
    {value: 1, axis: 'z', sign: 1, name: "NORTH", rad: Math.PI / 2},
    {value: 2, axis: 'x', sign: 1, name: "WEST", rad: Math.PI},
    {value: 3, axis: 'z', sign: -1, name: "SOUTH", rad: 3 * Math.PI / 2},
];

go.DIRECTION.cameraTranslate = function(dir, camera_dir) {
    return go.DIRECTION[(dir + camera_dir) % go.DIRECTION.length];
};

go.MOVE = [ 
    {value: 0, axis: 'x', sign: -1, name: "right",  rad: 0},
    {value: 1, axis: 'z', sign: 1,  name: "up",     rad: Math.PI / 2},
    {value: 2, axis: 'x', sign: 1,  name: "left",   rad: Math.PI},
    {value: 3, axis: 'z', sign: -1, name: "down",   rad: 3 * Math.PI / 2},
];

go.MOVE.cameraTranslate = function(dir, camera_dir) {
    return go.DIRECTION[(dir + camera_dir) % go.DIRECTION.length];
};

go.MOVE.byName = function(name) {
    for(var i=0; i<go.MOVE.length; i++) {
        if (go.MOVE[i].name == name) { return go.MOVE[i] };
    };
    throw Error("invalid move name");
};



