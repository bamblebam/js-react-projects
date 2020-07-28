
CreateGrid()

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
            num.innerHTML = '<span>1</span>'
            numRow.appendChild(num)
        }
        document.body.appendChild(numRow)
    }
}

function GetRandomNumber() {

}