// 

const arr = [1,2,3,4,5,6]  //создание массива с помощью литерала
const obj = {name: "Bob"}


const array = new Array(1,2,3,4,5,6,) //создaние массива с помощбю функции-конструктора
const object = new Object()
object.name = "Bob"

console.log(arr);
console.log(array);

const map = new Map()
const set = new Set()

// Функции для создания сущностей - конструкторы => класс
//результат вызова => сущность класса

// класс
class Pet {
    constructor(name, type, voice){
        // const this ={}
        this.name = name
        this.type = type
        this.voice = voice
    }
    greeting(){ //метод экземпляра класса  в Pet.prototype
        console.log(`Hi! I'm ${this.type},My name is ${this.name}, My voice is ${this.voice}`);
    }
    getVoice() {
        console.log(`${this.voice}-${this.voice}`);
    }
}

// экземпляры класса Pet (инстанс)
const barsik = new Pet("Barsik", "cat", "meow")
const bobik = new Pet ("Bobik","dog", "Woof")



console.log(barsik);
console.log(bobik);
barsik.greeting()
bobik.getVoice()





// добавление методов массивам 
Array.prototype.newMethod = function() {
    console.log(`Моя длина равна ${this.length}`);
}
array.newMethod()




// самописный map()
Array.prototype.customMap = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const element = callback(this[i]);
        result.push(element)
    }
    return result
}

console.log(array.map(el => el * el));
console.log(array.customMap(el => el * el));


// самописный фильтр
Array.prototype.customFiltr = function (callback) {
    
}




Array.prototype.newFc = function () {
    alert("New method")
}
array.newFc()



// Самописный метод find()
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true){
            return this[i]
        }
    }
    return undefined
}

const result = arr.myFind(el => el > 4)
console.log(result);