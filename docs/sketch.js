// create div
let bg = document.createElement("div")
bg.id = "home-background"
bg.style.position = "fixed"
bg.style.top = 0
bg.style.left = 0
bg.style.backgroundColor = "transparent"
bg.style.width = "100vw"
bg.style.height = "100vh"
bg.style.zIndex = -10
document.getElementsByTagName("body")[0].appendChild(bg)

let cnv, grid = 24;
const emojis = ["📁", "👩‍💻", "⌨️", "💻", "🖱️", "🖥️", "📈", "📉"]
let counter = 0, maxCount

function setup() {
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.parent("home-background")
    emojiPage()
}

function windowResized() {
    clear()
    resizeCanvas(windowWidth, windowHeight)
    emojiPage()
}

function emojiPage() {
    for (let x = 0; x < width/grid; x++) {
        for (let y = 0; y < height/grid; y++) {
            let emoji = emojis[floor(random(emojis.length))]
            text(emoji, grid/4 + x * grid, y * grid - grid/4)
        }
    }
    background(255, 247)
}