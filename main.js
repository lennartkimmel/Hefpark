// let lights = ["orange", "green", "yellow", "blue"];
// let sounds = ["./sounds/bmo.wav", "./sounds/linux.wav", "./sounds/check.wav", "./sounds/play.wav"];
//
// let light = document.getElementById('light');
// let sound = document.getElementById('sound');
//
// let orange = document.getElementById('orange');
// orange.addEventListener("click", function (){
//     light.src = lights[0];
//     sound.src = sounds[0];
//     sound.play();
//     console.log("bmo!");
// });


//OBJECT: kleuren, kleurcodes en geluiden
let buttons = [
    {colorName: "orange",   colorCode: "0xff8000", sound: "Sounds.BaDing"},
    {colorName: "green",    colorCode: "0x00ff00", sound: "Sounds.BaDing"},
    {colorName: "yellow",   colorCode: "0xffff00", sound: "Sounds.BaDing"},
    {colorName: "blue",     colorCode: "0x00ffff", sound: "Sounds.BaDing"}
];


//FUNCTION: Wanneer je op de sensor drukt > licht en geluid.
function pressure(){
    let pressure = 0;
    forever(function () {
        pressure = pins.A2.analogRead();
        if (pressure >= 50) {
            music.playSoundUntilDone(music.sounds(Sounds.BaDing));
            light.setAll(buttons.colorCode)
        } else {
            light.setAll(0x000000)
        }
    });
}

pressure();



