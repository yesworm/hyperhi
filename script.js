const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")

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
    const w = window.innerWidth
    const h = window.innerHeight
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi 
    canvas.height = h * dpi 
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    // what kind of canvas are we referring to here - 2d? 3d? 
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    // adding "styles" to our canvas drawing
    context.fillStyle = "green"
    context.strokeStyle = "green"
    context.lineWidth = 60
    context.lineCap = "round"
    context.lineJoin = "round"
    
} 

// drawing 
const startDraw = function(canvas) {
    const context = canvas.getContext("2d")
    context.strokeStyle = "yellow"
}

// create drawing tool function - based on canvas, x, and y 
const moveDraw = function(canvas, x, y) {
    const context = canvas.getContext("2d")
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x, y)
    context.stroke()
}


setupCanvas(canvasTag)


document.addEventListener("mousedown", function(event) {
    growCursor()
    startDraw(canvasTag)
    moveDraw(canvasTag, event.pageX, event.pageY)
})

document.addEventListener("mouseup", function() {
    shrinkCursor()
    const context = canvasTag.getContext("2d")
    context.strokeStyle = "green" 
})

document.addEventListener("mousemove", function(event){
    console.log(event)
    //event.pageX
    //event.pageY

    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasTag, event.pageX, event.pageY)
})