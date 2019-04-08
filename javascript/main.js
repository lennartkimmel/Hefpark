let Press4 = 0
let Press3 = 0
let Press2 = 0
let Press1 = 0
forever(function () {
    if (pins.A7.digitalRead()) {
        input.setLightThreshold(LightCondition.Bright, 50)
        control.assert(true, 30)
        Press1 = pins.A1.analogRead()
        Press2 = pins.A2.analogRead()
        Press3 = pins.A5.analogRead()
        Press4 = pins.A6.analogRead()
        for (let index = 0; index <= 9; index++) {
            if (index * 10 >= Press1) {
                light.onboardStrip().setPixelColor(index, 0xff8000)
            } else {
                light.onboardStrip().setPixelColor(index, 0x000000)
            }
            if (Press1 >= 10) {
                music.playTone(208, music.beat(BeatFraction.Eighth))
            }
            if (index * 10 >= Press2) {
                light.onboardStrip().setPixelColor(index, 0x0000ff)
            } else {
                light.onboardStrip().setPixelColor(index, 0x000000)
            }
            if (Press2 >= 10) {
                music.playTone(277, music.beat(BeatFraction.Eighth))
            }
            if (index * 10 >= Press3) {
                light.onboardStrip().setPixelColor(index, 0xffff00)
            } else {
                light.onboardStrip().setPixelColor(index, 0x000000)
            }
            if (Press3 >= 10) {
                music.playTone(330, music.beat(BeatFraction.Eighth))
            }
            if (index * 10 <= Press4) {
                light.onboardStrip().setPixelColor(index, 0x00ff00)
            } else {
                light.onboardStrip().setPixelColor(index, 0x000000)
            }
            if (Press4 >= 10) {
                music.playTone(370, music.beat(BeatFraction.Eighth))
            }
            light.setAll(0x000000)
        }
        music.setVolume(256)
        pause(500)
    }
})
forever(function () {

})