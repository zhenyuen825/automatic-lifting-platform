basic.showIcon(IconNames.Heart)
SuperBit.Servo2(SuperBit.enServo.S1, 90)
basic.pause(1000)
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    SuperBit.Servo2(SuperBit.enServo.S1, 0)
    basic.pause(500)
    basic.showArrow(ArrowNames.South)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    SuperBit.Servo2(SuperBit.enServo.S1, 90)
    basic.pause(1000)
})
