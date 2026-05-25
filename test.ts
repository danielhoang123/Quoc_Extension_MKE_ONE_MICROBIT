// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    if (LineTracker.detectLine(LineTracker.SensorPort.P1)) {
        basic.showString("1")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P2)) {
        basic.showString("2")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P3)) {
        basic.showString("3")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P4)) {
        basic.showString("4")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P5)) {
        basic.showString("5")
    } else {

    }
})