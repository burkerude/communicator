function confirm () {
    led.setBrightness(255)
    basic.pause(10)
    led.setBrightness(80)
    basic.pause(10)
    led.setBrightness(255)
}
function Home () {
    current_menu = ["MESSAGES", "SETTINGS", "ABOUT"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
        messages()
    } else if (menu_selection == 1) {
        settings()
    } else if (menu_selection == 2) {
        basic.showString("micrOS is a lightweight operating system for the microbit made by Burke Rudelsheim.")
    }
}
function type_preview () {
    basic.pause(10)
    basic.showString("" + (current_string_type))
}
function settings () {
    current_menu = ["SCREEN BRIGHTNESS"]
    Menu()
}
function messages () {
    current_menu = ["MESSAGES", "DRAFTS", "SETTINGS"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
    	
    } else if (menu_selection == 1) {
    	
    } else if (menu_selection == 2) {
    	
    }
}
function _type () {
    for (let value of alphabet) {
        basic.showString("" + (value))
        while (!(input.buttonIsPressed(Button.B))) {
            if (input.buttonIsPressed(Button.A)) {
                working_string_type = "" + current_string_type + value
                current_string_type = current_string_type
                confirm()
            } else if (input.buttonIsPressed(Button.AB)) {
                _break = 1
                type_preview()
            } else if (_break == 1) {
                break;
            }
        }
        if (_break == 1) {
            _break = 0
            break;
        }
    }
}
function Menu () {
    menu_selection = 100
    menu_place = 0
    for (let value of current_menu) {
        basic.showString("" + (value))
        while (!(input.buttonIsPressed(Button.B))) {
            if (input.buttonIsPressed(Button.A)) {
                menu_selection = menu_place
                _break = 1
                break;
            }
        }
        menu_place += 1
        if (current_menu.length == menu_place) {
            Menu()
        }
        if (_break == 1) {
            _break = 0
            break;
        }
    }
}
let menu_place = 0
let working_string_type = ""
let _break = 0
let current_string_type = 0
let menu_selection = 0
let current_menu: string[] = []
let alphabet: string[] = []
let page = 1
alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "^"]
_type()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(100)
        if (input.buttonIsPressed(Button.AB)) {
            for (let index = 0; index <= 3; index++) {
                basic.showNumber(index)
                if (!(input.buttonIsPressed(Button.AB))) {
                    break;
                }
                basic.pause(100)
                if (index == 3) {
                    _break = 1
                    basic.pause(10)
                    Home()
                }
            }
        } else {
        	
        }
    }
})
