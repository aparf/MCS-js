let totalCash = window.prompt("Amount of cash")
let watchesCount = window.prompt("How many watches?")
let earringsCount = window.prompt("How many earrings?")

let watchesTotal = Number(watchesCount) * Number(window.prompt("Price for watches?"))
let earringsTotal = Number(earringsCount) * Number(window.prompt("Price for earrings?"))


let check = ((watchesTotal + earringsTotal) <= totalCash)

document.body.innerHTML = "<h1>" + check + "</h1>"
