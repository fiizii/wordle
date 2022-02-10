# wordle
Wordle solution grabber

# how to use

you can do one of two things

# method one
paste `
let x = JSON.parse(window.localStorage.getItem("gameState"))
document.querySelector("body > game-app").shadowRoot.querySelector("#game > header > div.title").innerHTML = "Solution:"+x.solution
`
into your browser's console

# method two

