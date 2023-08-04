import {Given, When, Then} from "@cucumber/cucumber";
import chai from "chai"
import {key} from "webdriverio"

Given(/^Google page is opened$/,async function(){
    await browser.url("https://www.google.com")
    await browser.pause(5000)
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

/*
 *  Web Ineractions
 */
Given(/^WebPage page is opened$/, async function () {
    await browser.url("frames")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})    // timeout implicitly wait
    // await browser.maximizeWindow()
    await browser.pause(2000)
})

When(/^we interact with elements$/, async function () {
    /**
     * A. Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just addValue
     * 3. Click and type
     * 4. Slow typing
     */
    // let num = 12345
    // let StrNum = num.toString()

    // let ele = await $(`[type=number]`)
    // // await ele.setValue(12345)            //this will add value by clearing the input box(if had any entry)
    // await ele.click()
    // // await ele.addValue(12345)            //this will add value without clearing the input box
    // for(let i=0; i<StrNum.length; i++){
    //     let CharStr = StrNum.charAt(i)
    //     await browser.pause(1000)
    //     await browser.keys(CharStr)
    // }

    /**
     * B. Dropdown
     * Actions:
     * 1. Assert default option is selected
     * 2. Selected by attribut, test, index
     * 3. Get a list of options
     */

    /*1. Assert default option is selected*/
    // let ele = await $(`[selected=selected]`)
    // let val = await ele.getText()
    // chai.expect(val).to.be.equal("Please select an option")

    /*2. Selected by attribut, test, index*/
    // let ddele = await $(`#dropdown`)
    // // await ddele.selectByAttribute('value', 1)
    // // await ddele.selectByIndex(2)
    // await ddele.selectByVisibleText('Option 2')
    /*3. Get a list of options*/
    // let eleArr = await $$(`select > option`)
    // let arr = []
    // for(let i=0; i<eleArr.length; i++){
    //     let ddele = eleArr[i]
    //     let txt = await ddele.getText()
    //     arr.push(txt)
    // }
    // console.log(`>> ArrayValue: ${arr}`)

    /**
     * C. Checkbox
     * Actions:
     * 1. Select an Option
     * 2. Unselect an option if selected
     * 3. Assert is option selected
     * 4. Select all option
     */

    /*1. Select an Option */
    // let ele = await $(`//form[@id='checkboxes']/input[1]`)
    // await ele.click()

    /* 2. Unselect an option if selected*/
    // let ele2 = await $(`//form[@id='checkboxes']/input[2]`)
    // await ele2.click()

    /*3. Assert is option selected 
      4. Select all option */
    // let checkArr = await $$(`//form[@id='checkboxes']/input`)
    // for(let i=0; i<checkArr.length; i++){
    //     let val = checkArr[i]
    //     if(!await val.isSelected()){
    //         await val.click()
    //     }
    //     let chekedbox = await val.isSelected()
    //     chai.expect(chekedbox).to.be.true
    // }

    /*
     * D. Windows Handling
     * Actions:
     * 1. Launch the browser
     * 2. Open another windows
     * 3. Switch to the windows
     * 4. Switch back to the main window
     * 
     * Methods Used:
     * 1. getTitle()
     * 2. getWindowHandle()
     * 3. getWindowHandles()
     * 4. switchToWindow()
     */

    // //open new windows
    // await $(`=Click Here`).click()
    // await $(`=Elemental Selenium`).click()
    // let paretnwinHandle = await browser.getWindowHandle()

    // //Switch to windows and get the titles
    // let allWin = await browser.getWindowHandles()
    // for(let i=0; i<allWin.length; i++){
    //     let win = allWin[i]
    //     await browser.switchToWindow(win)
    //     let title = await browser.getTitle()
    //     console.log(`>> Title Of the Window is : ${title}`)
    // }
    // //Switch back to parent window
    // await browser.switchToWindow(paretnwinHandle)

    /**
     * E. Handling Alert
     * Methods Used:
     * 1. isAlertOpen()
     * 2. acceptAlert()
     * 3. dismissAlert()
     * 4. getAlertText()
     * 5. sendAlertText()
     */
    // await $(`button=Click for JS Alert`).click()
    // if(await browser.isAlertOpen()){                    //Alert Assert
    //     await browser.acceptAlert()                     //Alert Accepted
    // }
 
    // await $(`button=Click for JS Confirm`).click()
    // if(await browser.isAlertOpen()){
    //     await browser.dismissAlert()                    //Alert rejected
    // }

    // await $(`button=Click for JS Prompt`).click()
    // console.log(`>> text : ${await browser.getAlertText()}`)    //Alert message captured
    // await browser.sendAlertText("Hello there")                  //Text sended to alert
    // await browser.acceptAlert()
    
    /**
     * F. Basic Authentication
     * Actions:
     * 1. Change the baseURL and pass the credential there itself e.g. https://userName:Pass@domain.com
     * 2. Change the URL in Given statement then run the wdio file
     */

    /**
     * G. File Upload
     */
    // await $(`#file-upload`).addValue(`${process.cwd()}/data/demo.txt`)
    // await $(`#file-submit`).click()

    /**
     * H. Frame Handling
     * Methods Used:
     * 1. switchToFrame()
     * 2. switchToParentFrame()
     */
    await $(`=iFrame`).click()
    //Switch to iFrame
    let iframe= await $(`#mce_0_ifr`)
    await browser.switchToFrame(iframe)
    //Interactions with the iFrame
    // //Approach 1
    // await $(`#tinymce`).setValue("Hey I sucessfully switch to iFrame....")
    // await browser.switchToParentFrame()
    
    /**Not working as of now */
    // //Approach 2 - using keys
    // await $(`#tinymce`).click()
    // await browser.pause(1000)
    // await browser.keys(["Meta", "A"])
    // await browser.keys("Delete")
    // await $(`#tinymce`).addValue(`Hey I sucessfully switch to iFrame....`)
    // await browser.switchToParentFrame()
    // console.log(`>> parent frame title : ${await browser.getTitle()}`)

    /**
     * I. Basic Scrolling
     * Methods:
     * 1. scrollIntoView
     */
    await $(`span=Best Sellers in Books`).scrollIntoView()   //It will scroll till elemenet will be on top of the page
    // await $(`span=Best Sellers in Books`).scrollIntoView(false)  //this will scroll -''- bottome of the page

})