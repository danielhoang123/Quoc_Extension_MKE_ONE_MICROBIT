// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    if (LineTracker.eye1_detect()) {
        basic.showString("1")
    } else if (LineTracker.eye2_detect()) {
        basic.showString("2")
    } else if (LineTracker.eye3_detect()) {
        basic.showString("3")
    } else if (LineTracker.eye4_detect()) {
        basic.showString("4")
    } else if (LineTracker.eye5_detect()) {
        basic.showString("5")
    } else {

    }
})
