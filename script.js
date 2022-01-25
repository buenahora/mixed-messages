
const button = document.querySelector("button")

const firstPart = [
    "When you have a dream,", 
    "Nothing is impossible.",
    "The bad news is time flies.",
    "Life has got all those twists and turns.",
    "You make a choice:"
]

const secondPart = [
    "Don’t let other people write your script.",
    "another goal or to dream a new dream.",
    "What matters is whether you’re comfortable with it.",
    "you realize you can make up your own mind,",
    "I see it instead as forward motion."
]

const thirdPart = [
    "Nobody sets the rules but you.",
    "You can design your own life.",
    "The journey doesn’t end.",
    "You don’t always need a plan.",
    "You can be everything."
]


button.addEventListener("click", () => {
    let container = document.querySelector("#showQuote")
    let message = `"` + firstPart[Math.floor(Math.random() * firstPart.length)] + " " + secondPart[Math.floor(Math.random() * secondPart.length)] + " " + thirdPart[Math.floor(Math.random() * thirdPart.length)] + `"`
    container.textContent = message
})