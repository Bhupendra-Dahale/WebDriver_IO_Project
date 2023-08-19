import reporter from "../../helper/reporter.ts";
import Page from "./page.ts";

class Employee extends Page{
    constructor(){
        super()
    }

    // Go to the Add Employee section
    get pim_link() {return $(`//span[normalize-space()='PIM']`)}
    get addEmp() { return $(`//a[normalize-space()='Add Employee']`)}

    async pim() {
        await this.click(await this.pim_link)
    }

    async addEmployee(){
        await this.click(await this.addEmp)
    }

    // Filling the Initial details
    get fn() {return $(`[name='firstName']`)}
    get mn() {return $(`[name='middleName']`)}
    get ln() {return $(`[name='lastName']`)}
    get empid() {return $(`//div[@class='oxd-input-group oxd-input-field-bottom-space']//input[@class='oxd-input oxd-input--active']`)}
    get save() {return $(`[type='submit']`)}

    async enterDetails(firstname: string, middlename: string, lastname: string){
        try{
            await this.typeInto(await this.fn, firstname)
            await this.typeInto(await this.mn, middlename)
            await this.typeInto(await this.ln, lastname)
            await this.click(await this.save)
        }catch(err){
            //@ts-ignore
            err.message = `>>> Error entering Initial Details ${err.message}`
        }
    }

    //Fill Personal details
    get nationalBtn() {return $(`(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]`)}
    get nationalList() {return $$(`//div[@role='listbox']//div//span`)}
    get maritalBtn() {return $(`(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[2]`)}
    get maritalList() {return $$(`//div[@role='listbox']//div//span`)}
    get dobBtn() {return $(`(//input[@placeholder='yyyy-mm-dd'])[2]`)}
    get yearBtn() {return $(`//div[@class='oxd-calendar-selector-year-selected']//p`)}
    get yearList() {return $$ (`//ul[@role='menu']//li`)}
    get monthBtn() {return $(`//div[@class='oxd-calendar-selector-month-selected']//i`)}
    get monthList() {return $$ (`//ul[@role='menu']//li`)}
    get dateList() {return $$ (`//div[@class='oxd-calendar-dates-grid']//div//div`)}
    get gender_male() {return $ (`//label[normalize-space()='Male']`)}
    get gender_female() {return $ (`//label[normalize-space()='Female']`)}
    get saveBtn() {return $(`//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']`)}
    get empListBtn() {return $ (`//a[normalize-space()='Employee List']`)}

    async nationality(testid: string, nationality: string){
        try{
            await this.nationalBtn.waitForClickable({timeout: 3000})
            await this.nationalBtn.click()
            await this.dropDown(await this.nationalList, nationality)
            reporter.addstep(testid, "info", "Nationality selected successfully", true)
        }catch(err){
            reporter.addstep(testid, "info", `>>> Error in Nationality selection : ${err}`, true)
            throw err
        }
    }

    async maritalStatus(testid: string, maritalstate: string){
        try{
            await this.maritalBtn.waitForClickable({timeout: 3000})
            await this.maritalBtn.click()
            await this.dropDown(await this.maritalList, maritalstate)
            await browser.pause(3000)
        }catch(err){
            reporter.addstep(testid, "info", `>>> Error in Marital status selection : ${err}`, true)
            throw err
        }
    }

    async dateOfBirth(testid: string, year: string, month: string, date: string){
        try{
            await this.dobBtn.waitForClickable({timeout: 3000})
            await this.dobBtn.click()
            await this.yearBtn.click()
            await this.dropDown(await this.yearList, year)
            await this.monthBtn.click()
            await this.dropDown(await this.monthList, month)
            await this.dropDown(await this.dateList, date)
            await browser.pause(3000)
        }catch(err){
            reporter.addstep(testid, "info", `>>> Error in DOB selection : ${err}`, true)
            throw err
        }
    }

    async genderSelection(testid: string, gender: string){
        try{
            if(gender === "Male"){
                await this.gender_male.waitForClickable()
                await this.gender_male.click()
            }else{
                await this.gender_female.waitForClickable()
                await this.gender_female.click()
            }
            await browser.pause(3000)
        }catch(err){
            reporter.addstep(testid, "info", `>>> Error in Gender selection : ${err}`, true)
            throw err
        }
    }

    async save_back(){
        try{
            await this.saveBtn.waitForClickable()
            await this.saveBtn.click()
            await this.empListBtn.waitForClickable()
            await this.empListBtn.click()
            await browser.pause(3000)
        }catch(err){
            throw err
        }
    }

    //Employee List Checking
    // get empidBox() {return $ (`//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']`)}
    get empNameBox() {return $ (`(//input[@placeholder='Type for hints...'])[1]`)}
    get searchBtn() {return $ (`//button[normalize-space()='Search']`)}
    // get empid_test() {return $ (`//div[@class='card-item card-header-slot-content --left']//div[@class='data']`)}
    // get lastNameTest() {return $ (`(//div[@class='data'])[3]`)}
    get lastNameTest() {return $ (`div[class='card-item card-body-slot'] div:nth-child(2) div:nth-child(1) div:nth-child(2)`)}
    
    async Employee_Check(testid: string, firstname: string, lastname: string){
        try{
            await this.empNameBox.waitForClickable({timeout: 3000})
            // await this.typeInto(await this.empidBox, empid)
            await this.typeInto(await this.empNameBox, firstname)
            await this.searchBtn.click()
            await browser.pause(3000)
            //Assertion
            // let EmpId = await this.empid_test.getText()
            // chai.expect(EmpId).equal(empid)
            await this.lastNameTest.waitForDisplayed()
            let LN = await this.lastNameTest.getText()
            chai.expect(LN).equal(lastname)
            reporter.addstep(testid, "info", `>>> Employee is present `, true)
        }catch(err){
            reporter.addstep(testid, "info", `>>> Employee is not present : ${err}`, true)
            throw err
        }
    }

}
export default new Employee()