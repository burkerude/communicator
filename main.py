function Home () {
    home_menu = ["MESSAGES", "SETTINGS", "ABOUT"]
    Menu(home_menu)
}
function _type () {
    for (let value of alphabet) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.pause(350)
        }
        basic.showString(value)
        while (!(input.buttonIsPressed(Button.B))) {
            if (page == 0) {
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                if (value == "^") {
                    break;
                }
                current_string = "" + current_string + value
                _type()
            }
        }
    }
}
function Menu (list: string) {
    for (let index = 0; index <= 4; index++) {
    	
    }
}
let current_string = ""
let home_menu: string[] = []
let alphabet: string[] = []
let page = 0
page = 1
alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "^"]
Home()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(50)
        if (input.buttonIsPressed(Button.AB)) {
            for (let index = 0; index <= 3; index++) {
                basic.showNumber(index)
                if (!(input.buttonIsPressed(Button.AB))) {
                    break;
                }
                basic.pause(100)
                if (index == 3) {
                    Home()
                }
            }
        } else {
        	
        }
    }
})
