/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aarav Singhal
 * Created on: Nov 2025
 * This program lights microbit lights diagonally
*/

// variables
let loopCounter: number = 0
let sprite: game.LedSprite = null

// on start
basic.showIcon(IconNames.Happy)

// on button A, LED sprite lights up diagonally from top left corner to bottom right corner
input.onButtonPressed(Button.A, function () {
    // setting values
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(500)
        loopCounter++
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// on button B, LED sprite lights up diagonally from bottom right corner to top left corner
input.onButtonPressed(Button.B, function () {
    // setting values
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(5, 5)

    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(500)
        loopCounter--
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})