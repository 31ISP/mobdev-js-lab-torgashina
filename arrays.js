const a = [4, 5, 3, 5, 2, 4, 5, 3]
const sum = a.reduce((acc, number) => acc + number, 0)
const res = sum / a.length
console.log (res.toFixed(2))

const q = a.filter(a => a > 3).map(a => `Оценка: ${a}`).join(", ")
console.log(q)

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sort = fruits.sort().join(", ")
console.log(sort)

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const f = products.filter(products  => products.price < 10000).map(products => products.name).join(", ")
console.log("Дешевле 10000: ",f)

console.log("Названия товаров: ", products.map(products => products.name).join(", "))

const su = products.map(products => products.price).reduce((acc, current) => acc + current)
console.log("Сумма: ", su)

const suma = [12, 45, 7, 33, 18]
const c = suma.some(suma => suma > 40)
const d = suma.every(suma => suma > 5)
console.log("Есть число больше 40: ", c)
console.log("Все числа больше 5: ", d)