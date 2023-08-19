import { Given, Then, When } from "@cucumber/cucumber";
import hp from "../../Page_Object/orangeHrm.home.ts"
import emp from "../../Page_Object/addEmployee.ts"

Given(/^Login to OrangeHRM (.*)$/, async function (url) {
    try{
        await hp.navigateTo(url)
        await hp.enterUserName(this.testid, process.env.HRM_USERNAME!)
        await hp.enterPassword(this.testid, process.env.HRM_PASSWORD!)
        await hp.clickLoginBtn(this.testid)
    }catch(err){
        //@ts-ignore
        err.message = `: Failed at login step : ${err.message}`
        throw err
    }
})

When(/^Go to the Add Employee section$/, async function(){
    try{
        await emp.pim()
        await emp.addEmployee()
    }catch(err){
        //@ts-ignore
        err.message = `>>> pim/Add Employee element is not visible ${err.message}`
        throw err
    }
})

When(/^Fill the Initial Details (.*) (.*) (.*)$/, async function (fistname, middlename, lastname) {
    await emp.enterDetails(fistname, middlename, lastname)
})

When(/^Fill the Personal Details (.*) (.*) (.*) (.*) (.*) (.*)$/,async function (Nationality, Marital_status, Year, Month, Date, Gender){
    await emp.nationality(this.testid, Nationality)
    await emp.maritalStatus(this.testid, Marital_status)
    await emp.dateOfBirth(this.testid, Year, Month, Date)
    await emp.genderSelection(this.testid, Gender)
    await emp.save_back()
})

Then(/^User must be visible in the List (.*) (.*)$/,async function (firstname, lastname){
    await emp.Employee_Check(this.testid, firstname, lastname)
})