enum RadioMessage {
    message1 = 49434,
    Ping = 61148
}
function button_reset () {
    a = false
    b = false
    AB = false
}
function loading2 () {
    loading = true
    while (loading == true) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(index, 0)
            basic.pause(10)
        }
        led.plot(0, 0)
        for (let index = 0; index <= 3; index++) {
            led.toggle(4, 1 + index)
            basic.pause(10)
        }
        for (let index = 0; index <= 3; index++) {
            led.toggle(3 - index, 4)
            basic.pause(10)
        }
        for (let index = 0; index <= 2; index++) {
            led.toggle(0, 3 - index)
            basic.pause(10)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    a = true
})
input.onButtonPressed(Button.AB, function () {
    AB = true
})
input.onButtonPressed(Button.B, function () {
    b = true
})
function Menu () {
    let menu = 0
    menu_selection = 100
    menu_place = 0
    while (menu == 0) {
        let current_menu: number[] = []
        if (a == true) {
            menu_place += -1
            button_reset()
        } else if (b == true) {
            menu_place += 1
            button_reset()
        } else if (AB == true) {
            menu_selection = menu_place
            button_reset()
            break;
        }
        basic.showString("" + (current_menu[menu_place]))
    }
}
/**
 * put whatever characters you want in the alphabet
 */
/**
 * any other way of capturing button events would miss button presses
 */
function text_input () {
    alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
    text_entered = false
    Text_input = 1
    visable_charactor = 0
    while (text_entered == false) {
        while (AB == true) {
            if (b == true) {
                visable_charactor += 1
                button_reset()
            } else if (a == true) {
                visable_charactor += -1
                button_reset()
            }
            basic.showString(alphabet.charAt(visable_charactor))
        }
        button_reset()
        if (alphabet.charAt(visable_charactor) == "#") {
            text_entered = true
        } else {
            working_text = "" + working_text + alphabet.charAt(visable_charactor)
            basic.clearScreen()
            basic.showString("" + (working_text))
        }
    }
}
/**
 * This is how to use the function
 */
let visable_charactor = 0
let Text_input = 0
let alphabet = ""
let menu_place = 0
let menu_selection = 0
let loading = false
let AB = false
let b = false
let a = false
let working_text = ""
let text_entered = false
text_input()
while (text_entered == false) {
	
}
text_entered = false
let Text_Output = working_text
