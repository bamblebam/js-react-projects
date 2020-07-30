
CreateGrid()
setInterval(ChangeNumbers, 100)

function CreateGrid() {
    let size = 30
    let rows = Math.ceil(window.innerHeight / size)
    let columns = Math.ceil(window.innerWidth / size)
    for (let i = 0; i < rows; i++) {
        const numRow = document.createElement('div')
        numRow.classList.add('num-row')
        for (let j = 0; j < columns; j++) {
            const num = document.createElement('div')
            num.classList.add('num')
            num.innerHTML = `<span class='num-value'>${GetRandomNumber()}</span>`
            numRow.appendChild(num)
        }
        document.body.appendChild(numRow)
    }
}

function GetRandomNumber() {
    number = ''
    if (Math.random() > 0.33) {
        number = 1
    }
    else if (Math.random() > 0.66) {
        number = 0
    }
    return number
}

function ChangeNumbers() {
    nums = document.querySelectorAll('.num')
    nums.forEach(num => {
        num.innerHTML = `<span class='num-value'>${GetRandomNumber()}</span>`
    });
}

const button = document.querySelector('.button')
button.addEventListener("click", () => {
    checkbox_list = check()
    generate(checkbox_list)
})

function check() {
    const checkboxes = document.querySelectorAll('input[type=checkbox')
    checkbox_list = []
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox_list.push(checkbox.id)
        }
    })
    return checkbox_list
}

function generate(checkbox_list) {
    length = checkbox_list.length
    full_size = 24
    size = full_size / length
    password = []
    checkbox_list.forEach(id => {
        if (id == 'uppercase') {
            for (i = 0; i < size; i++) {
                password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65))
            }
        }
        if (id == 'lowercase') {
            for (i = 0; i < size; i++) {
                password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97))
            }
        }
        if (id == 'numbers') {
            for (i = 0; i < size; i++) {
                password.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48))
            }
        }
        if (id == 'symbols') {
            symbol_list = '!@#$%^&*(){}[]=<>/,.'
            for (i = 0; i < size; i++) {
                password.push(symbol_list[Math.floor(Math.random() * symbol_list.length)])
            }
        }
    })
    display = document.querySelector('.password-display')
    password = password.sort(() => Math.random() - 0.5)
    final_password = password.join('')
    display.innerHTML = final_password
}

const clipboard = document.querySelector('.clipboard')
clipboard.addEventListener('click', () => {
    range = document.createRange()
    range.selectNode(document.querySelector('.password-display'))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
})