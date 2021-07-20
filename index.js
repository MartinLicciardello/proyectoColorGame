alert('Welcome to ColorGame')
var numberOfSquares = 6
var colors = generateRandomColors(numberOfSquares)
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorDisplay = document.querySelector("#colorDisplay")
var message = document.querySelector("#message")
var title = document.querySelector("h1")
var reset = document.querySelector("button#reset")
var easy = document.querySelector("button#easy")
var hard = document.querySelector("button#hard")

var clickedColor;

colorDisplay.textContent = pickedColor


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = color
    }
}

function pickColor() {
    var randomColor = Math.floor(Math.random() * (colors.length))
    return colors[randomColor]
}

function randomColor() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    return "rgb(" + r + ", " + g + ", " + b + ")"

}
function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}


for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]

    squares[i].addEventListener("click", function () {
        clickedColor = this.style.background
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!"
            title.style.background = clickedColor
            changeColors (clickedColor)
        } else {
            message.textContent = "Try again!"
            this.style.background = "#232323"
        }
    })
}




easy.addEventListener("click", function () {
    this.classList.add("selected")
    hard.classList.remove("selected")
    message.textContent = ""
    title.style.background = "#232323"
    numberOfSquares = 3
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor


    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors [i]
            squares[i].addEventListener("click", function () {
                clickedColor = this.style.background
                if (clickedColor ===pickedColor) {
                    message.textContent = "Correct!"
                    title.style.background = clickedColor
                    reset.textContent = "Play Again?"
                    changeColors(clickedColor)
                } else {
                    message.textContent = "Try again!"
                    this.style.background = "#232323"
                }

            })
        } else {
            squares[i].style.display = "none"
        }
    }
})
hard.addEventListener("click", function () {
    this.classList.add("selected")
    easy.classList.remove("selected")
    message.textContent = ""
    title.style.background = "#232323"
    numberOfSquares = 6
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i]
        squares[i].style.display = "block"

        squares[i].addEventListener("click", function () {
            clickedColor = this.style.background
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!"
                title.style.background = clickedColor
                reset.textContent = "Play again?"
                changeColors(clickedColor)
            } else {
                message.textContent = "Try again!"
                this.style.background = "#232323"

            }
        })
    }
})

reset.addEventListener("click", function () {
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    this.textContent = "New Colors"
    message.textContent = ""
    title.style.background = "#232323"

    for ( var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]

        squares[i].addEventListener("click", function () {
            clickedColor = this.style.background
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!"
                title.style.background = clickedColor
                reset.textContent = "Play Again?"
                changeColors(clickedColor)
            } else {
                message.textContent = "Try Again!"
                this.style.background = "#232323"
            }
        })
    }
})