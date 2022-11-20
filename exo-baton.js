let command = document.querySelector('.start')
let display = document.querySelector('.baton-left')
let input = document.querySelector('#number')
let start = document.querySelector('.start-btn')
let game = document.querySelector('.game')
let turn = document.querySelector('.turn')
let next = document.querySelector('.next')
let display_player = document.querySelector('.player')
let player_baton = document.querySelector('.player-baton')

let remaining_sticks = 0
let counter_stick = 0
let player = 1

function game_input() {
    start.addEventListener('click', function() {
        let nb_stick = input.value
        remaining_sticks = nb_stick

        if (nb_stick < 10) {
            window.alert('Minimum 10 sticks')
        } else {

            input.value = ''
            turn.classList.toggle('none')
            command.classList.toggle('none')
            display.classList.toggle('none')
            display.innerHTML = nb_stick + ' Stick(s) remaining'

            for (let i = 0; i < nb_stick; i++) {
                let div = document.createElement("div")
                div.className += "stick"
                game.appendChild(div)

                div.addEventListener('click', function() {
                    if (counter_stick < 3 && remaining_sticks != 0) {
                        counter_stick += 1
                        div.remove()
                        count_stick()
                    } else {
                        if (remaining_sticks != 0) {
                            window.alert('Max 3 sticks per turn')
                        } else {
                            window.alert('Game ended, refresh (F5) to restart !')
                        }
                    }
                })
            }
        }
        
    })
}

function count_stick() {
    remaining_sticks -= 1

    display.innerHTML = ""
    display.innerHTML = remaining_sticks + ' Stick(s) remaining'
    
    player_baton.innerHTML = ""

    switch (counter_stick) {
        case 1:
            player_baton.innerHTML = "1"
            player_baton.style.backgroundColor = "rgb(54, 150, 54)"
            break
        case 2:
            player_baton.innerHTML = "2"
            player_baton.style.backgroundColor = "rgb(184, 142, 27)"
            break
        case 3:
            player_baton.innerHTML = "3"
            player_baton.style.backgroundColor = "rgb(179, 44, 44)"
            break
    }
}

function next_turn() {
    next.addEventListener('click', function() {
        if (remaining_sticks > 0) {
            display_player.innerHTML = ""
            counter_stick = 0

            player_baton.innerHTML = "0"
            player_baton.style.backgroundColor = "rgb(255, 255, 255)"

            if (remaining_sticks == 1) {
                display.innerHTML = ""
                display.innerHTML = 'You lose'
                remaining_sticks = 0
            }

            if (player == 1) {
                player += 1
                display_player.innerHTML = "J2"
                display_player.style.backgroundColor = "rgb(212, 230, 54)"
            } else {
                player = 1
                display_player.innerHTML = "J1"
                display_player.style.backgroundColor = "rgb(61, 98, 167)"
            }
        }
    })
}

game_input()
next_turn()