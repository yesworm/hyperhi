const cursor = document.querySelector("div.cursor")

// when I hold mouse down, make cursor bigger
const growCursor = function() {
    cursor.classList.add("on-click")
}

// when I let go, make cursor smaller 
const shrinkCursor = function() {
    cursor.classList.remove("on-click")
}

growCursor()
shrinkCursor()