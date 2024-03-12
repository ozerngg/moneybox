let rawdistance = 0
let trashDetected = 0
let distance = 100
picobricks.servomotor(servoMotorType.servo1, 180)
basic.forever(function () {
    rawdistance = picobricks.hcsrRead(DigitalPin.P2, DigitalPin.P1)
    if (rawdistance < 1200) {
        distance = rawdistance
    }
    picobricks.servomotor(servoMotorType.servo1, 180)
    basic.pause(500)
    if (distance < 5) {
        trashDetected = 1
        basic.pause(300)
    }
    if (distance > 9 && trashDetected == 1) {
        trashDetected = 0
        picobricks.servomotor(servoMotorType.servo1, 90)
        basic.pause(500)
    }
})
