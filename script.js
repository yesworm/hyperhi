const cursor = document.querySelector("div.cursor")

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