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
        while (!(input.buttonIsPressed(Button.A))) {
            if (input.buttonIsPressed(Button.B)) {
                settings()
            }
        }
        text_input()
        while (0 == 0) {
        	
        }
        username = 0
        settings()
    } else if (menu_selection == 3) {
        messages()
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
    current_menu = ["MESSAGES", "DRAFTS", "SETTINGS"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
    	
    } else if (menu_selection == 1) {
        Drafts()
    } else if (menu_selection == 2) {
        settings()
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
function text_input () {
    Text_input = 1
    alphabet2 = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ^"
    visable_charactor = 0
    while (AB == 0) {
        if (input.buttonIsPressed(Button.A)) {
            visable_charactor += 1
        } else if (input.buttonIsPressed(Button.B)) {
            visable_charactor += -1
        }
        basic.showString("this".charAt(0))
    }
}
let visable_charactor = 0
let alphabet2 = ""
let Text_input = 0
let menu_place = 0
let AB = 0
let _break = 0
let menu_selection = 0
let current_menu: string[] = []
let username = ""
username = "burkerude"
let page = 1
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "^"]
Home()
