basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
