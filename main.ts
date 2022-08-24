input.onPinPressed(TouchPin.P0, function () {
    count += 2
    basic.showNumber(count)
})
let count = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
count = 1
basic.showNumber(count)
