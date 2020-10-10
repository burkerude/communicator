input.onButtonPressed(Button.A, function () {
    a = 1
})
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
function settings () {
    current_menu = ["SCREEN BRIGHTNESS", "CHANNEL", "USERNAME", "^"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
    	
    } else if (menu_selection == 1) {
    	
    } else if (menu_selection == 2) {
        basic.showString("" + (username))
        while (true) {
            if (a == 1) {
                working_text = ""
                text_input()
                while (text_entered == 0) {
                	
                }
                text_entered = 0
                username = working_text
                settings()
                break;
            } else if (b == 1) {
                settings()
                break;
            }
        }
    } else if (menu_selection == 3) {
        Home()
    }
}
function Drafts () {
	
}
input.onButtonPressed(Button.AB, function () {
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
        AB = 1
    }
})
function messages () {
    current_menu = ["MESSAGES", "DRAFTS"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
    	
    } else if (menu_selection == 1) {
        Drafts()
    }
}
input.onButtonPressed(Button.B, function () {
    b = 1
})
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
function text_input () {
    text_entered = 0
    Text_input = 1
    alphabet2 = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    visable_charactor = 0
    while (text_entered == 0) {
        while (AB == 0) {
            if (b == 1) {
                visable_charactor += 1
                b = 0
            } else if (a == 1) {
                visable_charactor += -1
                a = 0
            }
            basic.showString(alphabet2.charAt(visable_charactor))
        }
        AB = 0
        if (alphabet2.charAt(visable_charactor) == "#") {
            text_entered = 1
        } else {
            working_text = "" + working_text + alphabet2.charAt(visable_charactor)
            basic.clearScreen()
            basic.showString("" + (working_text))
        }
    }
}
let visable_charactor = 0
let alphabet2 = ""
let Text_input = 0
let menu_place = 0
let AB = 0
let _break = 0
let text_entered = 0
let working_text = ""
let b = 0
let menu_selection = 0
let current_menu: string[] = []
let a = 0
let username = ""
username = "burkerude"
Home()
basic.forever(function () {
    if (text_entered == 1) {
        text_entered = 0
        basic.showLeds(`
            # . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showString("" + (working_text))
    }
})
