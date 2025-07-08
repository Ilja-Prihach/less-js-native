// Массив внутри ммассива. Обработка таких данных имеет квадратичную сложность



const todolistId_1 = crypto.randomUUID() // Id from tudulist
const todolistId_2 = crypto.randomUUID()

let todolist = [
    {
        id: todolistId_1,
        title: "What to lern",
        filter: "all"
    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: "all"
    }
]


// Ассациативный массив - 
let tasks = {
    [todolistId_1]: [ //Если берем кюч из переменной, то должны записывать его в [] - синтаксис вычисляемых свойств объектов
        { id: 11, title: 'HTML&CSS', isDone: false },
        { id: 12, title: 'JS', isDone: true },
        { id: 13, title: 'ReactJS', isDone: false }
    ],
    [todolistId_2]: [
        { id: 21, title: 'Bear', isDone: false },
        { id: 22, title: 'Bread', isDone: true },
        { id: 23, title: 'Chips', isDone: false }
    ],
    [todolistId_3]: []
}

console.log(tasks);

const a = new Map()//колекция Map(), особенностью является, что ключами могут быть не только строки но и любые сущности
a.set(false, [1,2,3])  // добавим в а 
console.log(a);   //0: {false => Array(3)}
console.log(a.get(false)); //метод get для получения значения по ключу
a.set(tasks, "Lesson_4")


// функция создания нового тудулиста
function createTodolist(title) {
    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        filter: "all"
    }
    const nextState = [...todolist, newTodo]
    todolist = nextState
    tasks = {...tasks, [newTodo.id]: []}
}

//Положить таску тудулист , когда она появится
function createTask(taskTitle, toodolistId) {
    const newTAsk = {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false
    }
    task = {...tasks, [todolistId]: [...tasks[todolistId], newTAsk]}
}