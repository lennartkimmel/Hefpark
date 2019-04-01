let ports = ["A1", "A2", "A5", "A6"];

let buttons = {
    "A1":{colorName: "orange",   colorCode: "0xff8000", sound: "Sounds.BaDing"},
    "A2":{colorName: "green",    colorCode: "0x00ff00", sound: "Sounds.BaDing"},
    "A5":{colorName: "yellow",   colorCode: "0xffff00", sound: "Sounds.BaDing"},
    "A6":{colorName: "blue",     colorCode: "0x00ffff", sound: "Sounds.BaDing"}
};

function pressure(){
    let pressure = 0;
    forever(function () {
        for (let port of ports) {
            pressure = pins[port].analogRead();
            if (pressure >= 50) {
                music.playSoundUntilDone(music.sounds(Sounds.BaDing));
                light.setAll(buttons[port].colorCode)
            } else {
                light.setAll(0x000000)
            }
        }
    });
}

pressure();
