let x = JSON.parse(window.localStorage.getItem("gameState")); document.querySelector("body > game-app").shadowRoot.querySelector("#game > header > div.title").innerHTML = "Solution:"+x.solution
