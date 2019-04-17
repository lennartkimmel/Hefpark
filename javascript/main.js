//Aanmaken van variabelen
let distance = 0
let Press4 = 0
let Press3 = 0
let Press2 = 0
let Press1 = 0

function activatePress() {
    //Variabelen koppelen aan pins (AdaFruit)
    Press1 = pins.A1.analogRead()
    Press2 = pins.A2.analogRead()
    Press3 = pins.A5.analogRead()
    Press4 = pins.A6.analogRead()

    for (let index = 0; index <= 9; index++) {
        //Trommel 1: oranje kleur en playtone 208, 1/8 beat
        if (index * 10 >= Press1) {
            light.onboardStrip().setPixelColor(index, 0xff8000)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press1 >= 10) {
            music.playTone(208, music.beat(BeatFraction.Eighth))
        }
        //Trommel 2: blauw kleur en playtone 277, 1/8 beat
        if (index * 10 >= Press2) {
            light.onboardStrip().setPixelColor(index, 0x0000ff)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press2 >= 10) {
            music.playTone(277, music.beat(BeatFraction.Eighth))
        }
        //Trommel 3: geel kleur en playtone 330, 1/8 beat
        if (index * 10 >= Press3) {
            light.onboardStrip().setPixelColor(index, 0xffff00)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press3 >= 10) {
            music.playTone(330, music.beat(BeatFraction.Eighth))
        }
        //Trommel 4: groen kleur en playtone 370, 1/8 beat
        if (index * 10 <= Press4) {
            light.onboardStrip().setPixelColor(index, 0x00ff00)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press4 >= 10) {
            music.playTone(370, music.beat(BeatFraction.Eighth))
        }
        //Reset alle lichten
        light.setAll(0x000000)
    }
    //Pauze na het uitvoeren
    music.setVolume(256)
    pause(500)
}

//Functie: scant de sensor beweging > activeer bovenstaande functie
forever(function () {
    pins.A7.digitalWrite(false)
    control.waitMicros(2)
    pins.A7.digitalWrite(true)
    control.waitMicros(10)
    pins.A7.digitalWrite(false)
    distance = pins.A4.pulseIn(PulseValue.High) / 50
    light.graph(distance, 30)
    if (distance >= 0.25 && distance <= 50) {
        activatePress()
    }
    console.logValue("Distance:", distance)
})