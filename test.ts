// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    if (LineTracker.detectLine(LineTracker.SensorPort.P1, LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("1")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P2, LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("2")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P3, LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("3")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P4, LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("4")
    } else if (LineTracker.detectLine(LineTracker.SensorPort.P5, LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("5")
    } else {

    }
})