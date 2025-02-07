let Direction2 = 0
input.calibrateCompass()
basic.forever(function () {
    Direction2 = input.compassHeading()
    if (Direction2 < 45) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (Direction2 == 45) {
        basic.showString("NW")
    } else if (Direction2 < 135) {
        basic.showString("E")
    } else if (Direction2 == 135) {
        basic.showString("ES")
    } else if (Direction2 < 225) {
        basic.showString("S")
    } else if (Direction2 == 225) {
        basic.showString("SW")
    } else if (Direction2 < 315) {
        basic.showString("W")
    } else if (Direction2 == 315) {
        basic.showString("NW")
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
