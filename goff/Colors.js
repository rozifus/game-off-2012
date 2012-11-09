
var go = go || {};

go.COLORS = {
    RED:    0xc31c1c,
    GREEN:  0x52c31c,
    BLUE:   0x1c67c3,
    ORANGE: 0xc36f1c,
    PURPLE: 0x8f1cc3,
    YELLOW: 0xC3be1c,
    WHITE: 0xc0c0c0,
    BLACK: 0x252525,
};

go.COLORS.canPush = function(color) {
    if ( color == go.COLORS.YELLOW ||
         color == go.COLORS.ORANGE ||
         color == go.COLORS.GREEN  ||
         color == go.COLORS.BLACK   ) {
            return true;
    }
    return false;
};

go.COLORS.canPull = function(color) {
    if ( color == go.COLORS.RED    ||
         color == go.COLORS.ORANGE ||
         color == go.COLORS.PURPLE ||
         color == go.COLORS.BLACK   ) {
             return  true;
    };
    return false;
};

go.COLORS.canGhost = function(color) {
    if (color == go.COLORS.BLUE     ||
        color == go.COLORS.PURPLE   ||
        color == go.COLORS.GREEN    ||
        color == go.COLORS.BLACK     ) {
            return true;
    };
    return false;
};

