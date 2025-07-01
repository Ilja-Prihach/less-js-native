// console.log(typeof null)

// Методы массивов
// let numbers = [1, 2, 3, 4, 5, 6]

//push добавляет один или несколько элементов в конец массива, мутируя исходный массивю
// возвращает новую длинну массивва

const push = numbers.push(7, 8, 9)
console.log(numbers);
console.log(push);



//функция работающая как метод push
// let numbers = [1, 2, 3, 4, 5, 6]
function superPush(array, ...rest) {
    for(let i = 0; i < rest.length; i++){
        array[array.length] = rest[i]
    }
    // через цикл for of
    // for(el of rest) {
    //     array[array.length] = el
    // }
    return array.length
}
superPush(numbers, 7, 8, 9)
console.log(numbers);

numbers[numbers.length] = 7 // добавляем в массив не используя push



// pop удаляет последний элемент массива, исходный массив мутирует
// функция работающая как pop
// let numbers = [1, 2, 3, 4, 5, 6]
function superPop(array) {
    if(array.length){
        const lastElem = array[array.length - 1]
        array.length = array.length - 1
        return lastElem
    }
    return undefined
}
const pop = superPop(numbers)
console.log(pop);
console.log(numbers);





// метод indexOf() возвращает первый индекс по которому данный элемент может быть найден в массиве
// или -1, если такого индекса нет
// функция которая будет работать как indexOf()
// let numbers = [1, 2, 3, 4, 5, 6]
function superIndexOf(array, el, fromIndex = 0){
    if(fromIndex < array.length) {
        fromIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex //
        for (let i = fromIndex; i < array.length; i++){
        if(array[i] === el){
        return i
        }
    }
    }

    return -1
}

const indexOf = superIndexOf(numbers, 3, 0)
console.log(indexOf);



// метод reverse на месте обращает порядок следования элементов массива.
// Первый элемент становится последним, а последний первым
// функция работающая как метод реверс
// let numbers = [1, 2, 3, 4, 5, 6, 7]
function superRevese (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

const reverse = superRevese(numbers)
console.log(reverse);


// метод slice() возвращает новый массив, содержащий копию части исходного массива
// функция работающая как метод slice()
// let numbers = [1, 2, 3, 4, 5, 6, 7]

function superSlice (arr, start = 0, end = arr.length) {
    const result = []
    start = start < 0 ? arr.length + start : start
    end = end < 0 ? arr.length + end : end
    for (let i = start; i < end; i++) {
        superPush(result, arr[i])
    }
    return result
}

const slice = superSlice(numbers, 2, 5)
console.log(slice);




// includes
// Метод includes() экземпляров Array определяет, 
// содержит ли массив определенное значение, возвращая true или false.
// Функция которая работает как метод Includes()

let numbers = [1, 2, 3, 4, 5, 6, 7]
function superIncludes(arr, el){
    for(let i =0; i < arr.length; i++){
        if(arr[i] === el){
            return true
        }
    }
    return false
}

