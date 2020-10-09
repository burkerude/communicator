function Home () {
    basic.showString(current_string)
}
input.onButtonPressed(Button.AB, function () {
    basic.pause(50)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("1")
        basic.pause(100)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showString("2")
            basic.pause(100)
            if (input.buttonIsPressed(Button.AB)) {
                basic.showString("3")
                basic.pause(100)
            }
        }
    } else {
    	
    }
})
function _type () {
    for (let value of alphabet) {
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
let current_string = ""
let alphabet: string[] = []
let page = 0
page = 1
alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "^"]
_type()
