import { Then } from "@cucumber/cucumber";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (NumberOfItems) {
    if (!NumberOfItems)
        throw Error(`>>> Invalid No is provided : ${NumberOfItems}`)
    let eleArr = await $$(`.inventory_item_name`)
    chai.expect(eleArr.length).to.equal(parseInt(NumberOfItems))    //parseInt to change str to int
})

/**
 * Steps:
 * 1. Get Price list
 * 2. Convert string to number
 * 3. Assert if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function () {
    //1. Get Price list
    let eleArr = await $$(`.inventory_item_price`)
    let priceArr = []
    for(let i=0; i<eleArr.length; i++){
        priceArr.push(await eleArr[i].getText())        //pushing retrived values from webElements
    }
    console.log(`>>> Price Array : ${priceArr}`)

    //2. Convert string to number
    let priceNumArr = priceArr.map(ele => +ele.replace("$", ""))
    console.log(`>>> Number Array is : ${priceNumArr}`)
    
    //3. Assert if any value is <=0
    let singlePrice = priceNumArr.filter(ele => ele <=0)
    chai.expect(singlePrice.length).to.equal(0)
})