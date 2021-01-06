let Ζαρι = 0
input.onGesture(Gesture.EightG, function () {
    Ζαρι = randint(1, 1)
    if (1 == Ζαρι) {
        basic.showString("QT!!!")
    }
    basic.pause(800)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
