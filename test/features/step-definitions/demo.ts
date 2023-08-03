import {Given, When, Then} from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, function(){
    browser.url("https://www.google.com")
    browser.pause(5000)
})

When(/^we enter the (.*)$/, async function(searchItem) {
    console.log(`>>searchItem: ${searchItem}`);
    let ele= await $(`[type=search]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^click on the first search item$/, async function(){
    let ele= await $(`<h3>`)
    ele.click()
})

Then(/^URL should match with (.*)$/, async function(ExpectedURL) {
    console.log(`>> ExpectedURL: ${ExpectedURL}`);
    let url= await browser.getUrl();
    chai.expect(url).to.equal(ExpectedURL)
})