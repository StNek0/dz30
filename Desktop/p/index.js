const fs = require('fs')

//! Добавление массива человеков
let arr = [];
const names = ["Игоорь", "Ваасяя", "Цинь Ши Хуанди", "Жеееня", "Михалыч"];
const countries = ["Васяндия", "Игорьландия", "Великий Китайский Каганат", "Тихоокеанский союз"];

for (let i = 0; i < 30; i++){
    let nar = {};
    nar.nam = names[Math.floor(Math.random() * names.length)];
    nar.age = Math.floor(1 + Math.random() * 99);
    nar.cou = countries[Math.floor(Math.random() * countries.length)];
    arr.push(nar);
}
console.log(arr)
//fs.writeFileSync('./data.json', JSON.stringify(arr), (error) => {error ? console.log(error) : null})

//!Хрень какая-то
const express = require('express')
const path = require('path')

const server = express()
server.set('view engine', 'ejs')

const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.ejs`)

server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.get('/', (req, res) => {
    res.render(createPath('list'), { arr })
})

server.use(express.static('./style.css'))
server.use((req, res) => {res.status(404).render(createPath('error'))})