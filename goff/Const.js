
var go = go || {};

go.BLOCK_UNIT = 1;
go.PLAYER_COLOR = 0x55bbdd;
go.CAMERA_DISTANCE = 3;
go.CAMERA_HEIGHT = 6;
go.CAMERA_SPEED = 0.05;

go.DIRECTION = [ 
    {value: 0, axis: 'x', sign: -1, name: "EAST", rad: 0},
    {value: 1, axis: 'z', sign: 1, name: "NORTH", rad: Math.PI / 2},
    {value: 2, axis: 'x', sign: 1, name: "WEST", rad: Math.PI},
    {value: 3, axis: 'z', sign: -1, name: "SOUTH", rad: 3 * Math.PI / 2},
];

go.DIRECTION.cameraTranslate = function(dir, camera_dir) {
    return go.DIRECTION[(dir + camera_dir) % go.DIRECTION.length];
};



