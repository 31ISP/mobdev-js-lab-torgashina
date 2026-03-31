const sentence = "  javascript — это просто!  ".trim()
console.log(sentence[0].toUpperCase() + sentence.slice(1))

const name = "Иванов Иван"
const group = "ИСР-21"
const num = 4.75
console.log(`Студент ${name}, группа ${group}, средний балл: ${num}`)

const date = "2025-03-15"
const x = date.split('-')
console.log(`${x[2]}.${x[1]}.${x[0]}`)

const str = "Node.js разработчик"
console.log(`Начинается с "Node": ${str.startsWith("Node")}`)
console.log(`Заканчивается на "разработчик": ${str.endsWith("разработчик")}`)

console.log("42".padStart(8, "0"))