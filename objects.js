const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: 1967,
    pages: 480,
    info (){
        return `"${this.title}", ${this.author}, ${this.year} г., ${this.pages} стр.`
    }
}
console.log(book.info())


const { title, author, rating = 0} = book
console.log(title)
console.log(author)
console.log(rating)

const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const passedSt = students.filter(student => student.passed).map(student => student.name)
console.log ("Сдавшие студенты: ", passedSt)

const top = students.find(student => student.grade > 4.5)
console.log ("Оценки выше 4.5: ", top)

const summma = students.reduce((sum,student) => sum + student.grade, 0) / students.length
console.log("Средний балл: ", summma.toFixed(2))

function mergeUsers(user1, user2)
{
    return {...user1, ...user2}
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
console.log(mergeUsers(u1,u2))


function countByField(arr, field)
{
    return arr.reduce((acc, item) => {
        const value = item[field]
        acc[value] = (acc[value] || 0) + 1
        return acc
    }, {})
}
const passedCount = countByField(students, 'passed')
console.log(passedCount)