/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Sep 2024
 * This program ...
*/

let currentTemperature: number
let kelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    currentTemperature = input.temperature()
    kelvin = (currentTemperature + 273.15)
    kelvin = Math.round(kelvin)
    basic.showString('the temperature is')
    basic.showNumber(kelvin)
})

basic.showString('Hello, World!')
