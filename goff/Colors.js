
var go = go || {};

go.COLOR = {
};

go.COLOR.canPush = function(color) {
    if ( color == go.YELLOW ||
         color == go.ORANGE ||
         color == go.GREEN  ||
         color == go.BLACK   ) {
            return true;
    }
    return false;
};

go.COLOR.canPull = function(color) {
    if ( color == go.RED    ||
         color == go.ORANGE ||
         color == go.PURPLE ||
         color == go.BLACK   ) {
             return  true;
    };
    return false;
};

go.COLOR.canGhost = function(color) {
    if (color == go.BLUE     ||
        color == go.PURPLE   ||
        color == go.GREEN    ||
        color == go.BLACK     ) {
            return true;
    };
    return false;
};

