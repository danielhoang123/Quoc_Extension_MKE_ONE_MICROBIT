// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function (){
    if (LineTracker.eye3()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})