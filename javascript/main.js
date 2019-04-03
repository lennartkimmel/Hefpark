// let ports = ["A1", "A2", "A5", "A6"];

// let buttons = {
//     "A1":{colorName: "orange",   colorCode: "0xff8000", sound: "Sounds.BaDing"},
//     "A2":{colorName: "green",    colorCode: "0x00ff00", sound: "Sounds.BaDing"},
//     "A5":{colorName: "yellow",   colorCode: "0xffff00", sound: "Sounds.BaDing"},
//     "A6":{colorName: "blue",     colorCode: "0x00ffff", sound: "Sounds.BaDing"}
// };

// function pressure(){
//     let pressure = 0;
//     forever(function () {
//         for (let port of ports) {
//             pressure = pins[port].analogRead();
//             if (pressure >= 50) {
//                 music.playSoundUntilDone(music.sounds(Sounds.BaDing));
//                 light.setAll(buttons[port].colorCode)
//             } else {
//                 light.setAll(0x000000)
//             }
//         }
//     });
// }

// pressure();

let Press4 = 0
let Press3 = 0
let Press2 = 0
let Press1 = 0
forever(function () {
    Press1 = pins.A1.analogRead()
    Press2 = pins.A2.analogRead()
    Press3 = pins.A5.analogRead()
    Press4 = pins.A6.analogRead()
    for (let index = 0; index <= 9; index++) {
        if (index * 50 <= Press1) {
            light.onboardStrip().setPixelColor(index, 0xff8000)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press1 >= 50) {
            music.playSoundUntilDone(music.sounds(Sounds.MagicWand))
        }
        if (index * 50 <= Press2) {
            light.onboardStrip().setPixelColor(index, 0xffff00)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press2 >= 50) {
            music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
        }
        if (index * 50 <= Press3) {
            light.onboardStrip().setPixelColor(index, 0x00ff00)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press3 >= 50) {
            music.playSoundUntilDone(music.sounds(Sounds.Siren))
        }
        if (index * 50 <= Press4) {
            light.onboardStrip().setPixelColor(index, 0x0000ff)
        } else {
            light.onboardStrip().setPixelColor(index, 0x000000)
        }
        if (Press4 >= 50) {
            music.playSoundUntilDone(music.sounds(Sounds.JumpDown))
        }
    }
    pause(500)
})