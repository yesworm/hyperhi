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
} 

setupCanvas(canvasTag)


document.addEventListener("mousedown", function() {
    growCursor()
})

document.addEventListener("mouseup", function() {
    shrinkCursor()
})

document.addEventListener("mousemove", function(event){
    console.log(event)
    //event.pageX
    moveCursor(event.pageX, event.pageY)
    //event.pageY
})