input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    servos.P0.setAngle(60)
    servos.P1.setAngle(120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # .
        # . . . #
        # # # # #
        `)
    servos.P1.setAngle(60)
    servos.P0.setAngle(120)
})
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
servos.P0.setAngle(90)
servos.P1.setAngle(90)
basic.forever(function () {
	
})
