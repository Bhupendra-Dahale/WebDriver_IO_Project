import { Given } from "@cucumber/cucumber";
// import chai from "chai";

Given(/^Login to inventory web app$/,async function(){
    /** Inventory page URL */
    await browser.url(`https://www.saucedemo.com/`)
    await browser.setTimeout({implicit:15000, pageLoad: 10000})

    /** Login to the page */
    await $(`#user-name`).setValue("standard_user")
    await $(`#password`).setValue("secret_sauce")
    await $(`[type=submit]`).click()
    console.log(`>> login is successful`)
    await browser.pause(5000)


    /** Login Assert */                     //is getText() worked for tags text?
    // await browser.acceptAlert()
    // console.log(`>> Alert is Accepted`)
    // let title = await $(`<title>`).getText()
    // console.log(`>> title of page is : ${title}`)
    // chai.expect(title).equals("Swag Labs")
})