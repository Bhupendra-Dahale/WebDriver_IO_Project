import { Given } from "@cucumber/cucumber";
// import chai from "chai";

Given(/^Login to inventory web app$/,async function(){
    console.log(`user name : ${process.env.TEST_STD_USERNAME}`)
    /** Inventory page URL */
    await browser.url(`https://www.saucedemo.com/`)
    
    /** Login to the page */
    try {
        await $(`#user-name`).setValue(process.env.User_Std_USERNAME!)
        await $(`#password`).setValue(process.env.User_Std_PASSWORD!)
        await $(`[type=submit]`).click()
    } catch (err) {
        console.log(`Error with credential, Retrying.....`)
        await browser.refresh()                                 //refresh the page
        await $(`#user-name`).setValue("standard_user")
        await $(`#password`).setValue("secret_sauce")
        await $(`[type=submit]`).click()
    }

    /** login with another user */
    // await browser.reloadSession()                              //reload session for another user
    // await browser.url(`https://www.saucedemo.com/`)
    // await $(`#user-name`).setValue("problem_user")
    // await $(`#password`).setValue("secret_sauce")
    // await $(`[type=submit]`).click()

    // await browser.back()                                     //move backward
    // await browser.forward()                                  //move forward
})