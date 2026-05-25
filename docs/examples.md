# Examples

## Read P1 Sensor

```blocks
basic.forever(function () {
    if (LineTracker.eye1()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```