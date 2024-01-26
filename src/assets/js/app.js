import * as flsWebpFunction from "./modules/webfunctions.js"
import * as flsCalculator from "./modules/calculator.js"


const purchase = {

    Electronics: [
        { name: 'Laptop', price: 45 },
        { name: 'Keyboard', price: 432 },
        { name: 'Mouse', price: 505 },
        { name: 'Cable HDMI', price: 350 }
    ],
    Textile: [
        { name: 'Bag', price: 50 }
    ]


}


const purchaseArrayPrice = [...purchase.Electronics, ...purchase.Textile]

const initialValue = 0

const result = flsCalculator.calculatorPrice(purchaseArrayPrice)
const result2 = purchaseArrayPrice.reduce(({ price }, currentValue) => price + currentValue, { price: 0 })



flsWebpFunction.isWebp()



console.log('sum =', result.total)
console.log(result2)


