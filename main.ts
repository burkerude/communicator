enum RadioMessage {
    message1 = 49434
}
function check () {
    load_speed = 25
    led.plot(0, 0)
    basic.pause(load_speed)
    led.plot(1, 0)
    basic.pause(load_speed)
    led.plot(2, 0)
    basic.pause(load_speed)
    led.plot(3, 0)
    basic.pause(load_speed)
    led.plot(4, 0)
    basic.pause(load_speed)
    led.plot(4, 1)
    basic.pause(load_speed)
    led.plot(4, 2)
    basic.pause(load_speed)
    led.plot(4, 3)
    basic.pause(load_speed)
    led.plot(4, 4)
    basic.pause(load_speed)
    led.plot(3, 4)
    basic.pause(load_speed)
    led.plot(2, 4)
    basic.pause(load_speed)
    led.plot(1, 4)
    basic.pause(load_speed)
    led.plot(0, 4)
    basic.pause(load_speed)
    led.plot(0, 3)
    basic.pause(load_speed)
    led.plot(0, 2)
    basic.pause(load_speed)
    led.plot(0, 1)
    basic.pause(200)
    basic.clearScreen()
}
function button_reset () {
    a = 0
    b = 0
    AB = 0
}
function send_message (message: string, recipient: string) {
    radio_in = ""
    working_group = randint(1, 255)
    radio.sendValue(recipient, working_group)
    radio.setGroup(working_group)
    loading = true
    for (let index = 0; index <= 9; index++) {
        if (radio_in == recipient) {
            radio.sendString(message)
            loading = false
        } else if (index == 9) {
            break;
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    send_message("abc", "burkerude")
    button_reset()
})
function Home () {
    current_menu = ["MESSAGES", "SETTINGS"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
        messages()
    } else if (menu_selection == 1) {
        settings()
    } else if (menu_selection == 2) {
    	
    }
}
function settings () {
    current_menu = ["null", "null2", "USERNAME", "^"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
    	
    } else if (menu_selection == 1) {
    	
    } else if (menu_selection == 2) {
        basic.showString(username)
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
    let drafts_content: string[] = []
    current_draft = 0
    current_menu = ["0", "1", "2", "3", "4"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    current_draft = menu_selection
    current_menu = ["READ", "WRITE", "TO:", "SEND", "^"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
        basic.showString("" + (drafts_content[current_draft]))
        Drafts()
    } else if (menu_selection == 1) {
        working_text = ""
        text_input()
        while (text_entered == 0) {
        	
        }
        text_entered = 0
        drafts_content[current_draft] = working_text
        check()
        basic.showString("" + (drafts_content[current_draft]))
        Drafts()
    } else if (menu_selection == 2) {
        let drafts_recipients: string[] = []
        working_text = ""
        text_input()
        while (text_entered == 0) {
        	
        }
        text_entered = 0
        drafts_recipients[current_draft] = working_text
    } else if (menu_selection == 3) {
    	
    } else if (menu_selection == 4) {
    	
    }
}
input.onButtonPressed(Button.AB, function () {
    AB = 1
})
radio.onReceivedString(function (receivedString) {
    radio_in = receivedString
})
function messages () {
    current_menu = ["INBOX", "DRAFTS"]
    Menu()
    while (menu_selection == 100) {
        basic.pause(25)
    }
    if (menu_selection == 0) {
        Drafts()
    } else if (menu_selection == 1) {
        Drafts()
    }
}
input.onButtonPressed(Button.B, function () {
    b = 1
})
radio.onReceivedValue(function (name, value) {
	
})
function Menu () {
    let menu = 0
    menu_selection = 100
    menu_place = 0
    while (menu == 0) {
        if (a == 1) {
            menu_place += -1
            button_reset()
        } else if (b == 1) {
            menu_place += 1
            button_reset()
        } else if (AB == 1) {
            menu_selection = menu_place
            button_reset()
            break;
        }
        basic.showString("" + (current_menu[menu_place]))
    }
}
function text_input () {
    text_entered = 0
    Text_input = 1
    alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
    visable_charactor = 0
    while (text_entered == 0) {
        while (AB == 0) {
            if (b == 1) {
                visable_charactor += 1
                button_reset()
            } else if (a == 1) {
                visable_charactor += -1
                button_reset()
            }
            basic.showString(alphabet.charAt(visable_charactor))
        }
        button_reset()
        if (alphabet.charAt(visable_charactor) == "#") {
            text_entered = 1
        } else {
            working_text = "" + working_text + alphabet.charAt(visable_charactor)
            basic.clearScreen()
            basic.showString(working_text)
        }
    }
}
let visable_charactor = 0
let alphabet = ""
let Text_input = 0
let menu_place = 0
let current_draft = 0
let text_entered = 0
let working_text = ""
let menu_selection = 0
let current_menu: string[] = []
let loading = false
let working_group = 0
let radio_in = ""
let AB = 0
let b = 0
let a = 0
let load_speed = 0
let username = ""
username = "burkerude"
check()
