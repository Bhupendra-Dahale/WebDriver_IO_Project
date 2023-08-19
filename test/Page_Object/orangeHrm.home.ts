import reporter from "../../helper/reporter.ts";
import Page from "./page.ts"

class HomePage extends Page{
    constructor(){
        super()
    }

    /**Page Objects */

    get userName() { return $(`//input[@name='username']`)}
    get password() { return $(`//input[@name='password']`)}
    get clikBtn() { return $(`[type=submit]`)}

    /**Page Actions */
    async enterUserName(testid: string, username: string){
        if(!username) throw Error (`Given Username: ${username} is not valid`)
        try{
            username = username.trim()
            await this.typeInto(await this.userName, username)
            reporter.addstep(testid , "info", `Username ${username} entered sucessfully`, true)
        }catch(err){
            //@ts-ignore
            err.message = `>>>Error entering username: ${username}, ${err.message}`
            throw err
        }
    }

    async enterPassword(testid: string, password: string){
        if(!password) throw Error (`Given Password is not valid`)
        try{
            password = password.trim()
            await this.typeInto(await this.password, password)
            //@ts-ignore
            reporter.addstep(testid , "info", `Password entered sucessfully`)
        }catch(err){
            //@ts-ignore
            err.message = `>>>Error entering Password: ${err.message}`
            throw err
        }
    }

    async clickLoginBtn(testid: string){
        try{
            await this.click(await this.clikBtn)
            //@ts-ignore
            reporter.addstep(testid , "info", `Clicked on Login sucessfully`)
        }catch(err){
            //@ts-ignore
            err.message = `>>>Error on click: ${err.message}`
            throw err
        }
    }
}
export default new HomePage()