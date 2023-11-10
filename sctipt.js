let randomBtn = document.querySelector("#btn1")
randomBtn.addEventListener("click", random)

function random() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Math.round(Math.random() * 10)
    console.log(num1)
    console.log(num2)
    if(num1==num2) {
        document.getElementById("randomResult").innerHTML = "Молодец! Вы угадали!!"
    }
    else {
        document.getElementById("randomResult").innerHTML = "Вы не угадали :("
    }
    document.getElementById("num1").value = " "
}

let plus1 = document.querySelectorAll(".btn2")[0]
let minus = document.querySelectorAll(".btn2")[1]

plus1.addEventListener("click",add)
minus.addEventListener("click", substract)

function add() {
    let num1 = Number(document.getElementsByClassName("num")[0])
    let num2 = Number(document.getElementsByClassName("num")[1])
    let result = num1 + num2
    document.querySelector("#calcResult").innerHTML = `Результат: ${result}`
}
function substract() {
    let num1 = Number(document.getElementsByClassName("num")[0])
    let num2 = Number(document.getElementsByClassName("num")[1])
    let result = num1 - num2
    document.querySelector("#calcResult").innerHTML = `Результат: ${result}`
}

function guessOperator() {
    let code = Number(document.getElementById("code").value)

    if(code==97 || code==88) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: MobiUz`
    }
    if(code==90 || code==91) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Beeline`
    }
    if(code==93 || code==94 || code==55) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Ucell`
    }
    if(code==33) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Humans`
    }
    if(code==95) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Uzmobile`
    }
    if(code==99 || code==77) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Uzmobile GSM`
    }
}

// let addStudentBtn = document.querySelector(`#addStudentBtn`)

// addStudentBtn.addEventListener("click", addStudent)

let students = []


function addStudent() {
    let studentSurname = document.getElementById("surname").value
    let studentName = document.getElementById("name").value
    let studentAge = document.getElementById("age").value
    let student = {
        surname: 'surname',
        name: 'name',
        age: 0
    }

    student.surname = studentSurname
    student.name = studentName
    student.age = studentAge

    students.push(Object.values(student))

    document.getElementById("surname").value = ""
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    showStudent()
}

function showStudent() {
    let groupList = document.querySelector(`.groupList`)
    groupList.innerHTML = ""
    
    for(let i = 0; i < students.length; i++)
    {
        let groupElem = 
        `<div class="groupElem">
            ${i+1}. ${students[i]}
        </div>`
        groupList.innerHTML = groupList.innerHTML + groupElem
    }
}

let info = {
    "Фамилия": "Темурмаликов", 
    "Имя": "Шахзодбек", 
    "Очество": "Темурмаликович",
    "Возраст": 14, 
    "Курс": "FrontEnd", 
    "Поток": 45,
    "Пол": "Ламинат", 
    "Номер тел.": 998909730654, 
    "Адресс": "г.Ташкент, Сереглийский р-н, массив Строителей, ул.Строителей, дом 8Б"
}

console.log(info)

let infoList = document.getElementById("myInfo")

let keys = Object.keys(info)
for(let i = 0; i < keys.length; i++){
    let key = keys[i]
    let value = info[key]
    let line = `<div>${key}: ${value}</div>`
    infoList.innerHTML += line
}