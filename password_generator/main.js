colors = ['#74ee15', '#000000']

CreateGrid()
setInterval(ChangeNumbers, 100)

function CreateGrid() {
    let size = 30
    let rows = Math.ceil(window.innerHeight / size)
    let columns = Math.ceil(window.innerWidth / size)
    console.log(rows, columns)
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
    console.log('change')
}