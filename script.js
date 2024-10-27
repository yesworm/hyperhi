const cursor = document.querySelector("div.cursor")
const canvasIn = document.querySelector("canvas.in")
const canvasOut = document.querySelector("canvas.out")


let isMouseDown = false

// when I hold mouse down, make cursor bigger
const growCursor = function() {
    cursor.classList.add("on-click")
}

// when I let go, make cursor smaller 
const shrinkCursor = function() {
    cursor.classList.remove("on-click")
}

// move cursor based on coordinates 
const moveCursor = function(x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

//set up canvas 
const setupCanvas = function(canvas) {
    // making sure the canvas is the entire content not just 100vh

    const bodyTag = document.querySelector("body")

    const w = window.innerWidth
    const h = bodyTag.offsetHeight
    const dpi = window.devicePixelRatio

    // canvas adjusting for retina devices
    canvas.width = w * dpi 
    canvas.height = h * dpi 
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    // what kind of canvas are we referring to here - 2d? 3d? 
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    if (canvas.classList.contains("in")) {
        context.fillStyle = "#000000"
        context.strokeStyle = "#ffffff"
    } else {
        context.fillStyle = "#ffffff"
        context.strokeStyle = "#000000"
    }

    // adding "styles" to our canvas drawing
    context.lineWidth = 60
    context.lineCap = "round"
    context.lineJoin = "round"

    context.shadowBlur = 45
    context.shadowColor = context.strokeStyle

    context.rect(0, 0, w, h)
    context.fill()
    
} 

// drawing based on the canvas and based on x & y 
const startDraw = function(canvas, x, y) {
    const context = canvas.getContext("2d")
    /*
    // adding array of random colours to choose from
    const colors = ["red", "blue", "yellow", "green"]
    const randomNum = Math.floor(Math.random() * colors.length)

    // adding the strokestyle ability to choose from array of colors 
    context.strokeStyle = colors[randomNum]
    */

    context.moveTo(x, y)
    
    // adding a brand new line instead of continuing previous path
    context.beginPath()
}

// create drawing tool function - based on canvas, x, and y 
const moveDraw = function(canvas, x, y) {
    const context = canvas.getContext("2d")
    if (isMouseDown) {
        context.lineTo(x, y)
        context.stroke()
    }

}


setupCanvas(canvasIn)
setupCanvas(canvasOut)


document.addEventListener("mousedown", function(event) {
    isMouseDown = true
    growCursor()
    startDraw(canvasIn, event.pageX, event.pageY)
    startDraw(canvasOut, event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)

})

document.addEventListener("mouseup", function() {
    isMouseDown = false
    shrinkCursor()
})

document.addEventListener("mousemove", function(event){
    console.log(event)
    //event.pageX
    //event.pageY

    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)
})

// resizing window 

window.addEventListener("resize", function() {
    setupCanvas(canvasIn)
    setupCanvas(canvasOut)
})