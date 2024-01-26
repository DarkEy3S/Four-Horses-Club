import * as flsError from "./Error.js"

export const calculatorPrice = (items) => {

    for (const { price } of items) {


        if ((typeof price) != 'number') flsError.Error('100', "В массиве должно быть цифры а не буквы")

        if (price < 0) flsError.Error('100', "В массиве не должно быть отрицательное число")
    }

    const sum = addTotal(items)
    return sum
}


const addTotal = (obj) => {
    return { obj, total: calculatorTotal(obj) }
}


const calculatorTotal = (items) => {
    let total = 0
    for (const { price } of items) {
        total += price


    }
    return total
}
