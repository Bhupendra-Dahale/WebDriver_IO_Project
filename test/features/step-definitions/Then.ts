import { Then } from "@cucumber/cucumber";
import chai from "chai";
import logger from "../../../helper/logger.ts";

Then(/^Inventory page should list (.*)$/, async function (NumberOfItems) {
    // console.log(wdio)       //Reference Error
    try {
        if (!NumberOfItems)
            throw Error(`>>> Invalid No is provided : ${NumberOfItems}`)    //Custom Error
        let eleArr = await $$(`.inventory_item_name`)
        chai.expect(eleArr.length).to.equal(parseInt(NumberOfItems))    //parseInt to change str to int
    } catch (err) {
        console.log(`Type of Error : ${typeof err}`)
        // console.log(`Type of Error : ${err.name}`)
        // console.log(`Type of Error : ${err.message}`)
        //Three actions based on Exception
        //1. Retry - retry the code by changing it using try/catch
        //2. Fail - Intentionally fail if not necessary
        //throw err  //Failing Test
        //3.Report & Move on - this will log the error message and not counter any error
        // logger.error(err.message)

    }
})

/**
 * Steps:
 * 1. Get Price list
 * 2. Convert string to number
 * 3. Assert if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function () {
    logger.info(`Checking item price`)                                          //Logger
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