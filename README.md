# wordle
Wordle solution grabber

# how to use

you can do one of two things

# method one
paste `
let x = JSON.parse(window.localStorage.getItem("gameState"));
document.querySelector("body > game-app").shadowRoot.querySelector("#game > header > div.title").innerHTML = "Solution:"+x.solution
`
into your browser's console

# method two
paste `let x=document.createElement("script");x.setAttribute("src","https://raw.githubusercontent.com/tonumber/wordle/main/sol.js"),document.body.appendChild(x);` into your browser's console. both do the same shit
