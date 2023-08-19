
export default class Page{
    constructor(){

    }
    
    /** All reusable web functions */
    async navigateTo(path: string){
        await browser.url(path)
        // await browser.maximizeWindow()
    }

    async typeInto(ele: WebdriverIO.Element, text: string){
        await ele.waitForDisplayed({timeout: 5000})
        if(!ele.elementId){
            throw Error(ele.error!.message)
        }
        await ele.setValue(text)
    }

    async click(ele: WebdriverIO.Element){
        await ele.waitForClickable({timeout: 5000})
        if(!ele.elementId){
            throw Error(ele.error!.message)
        }
        await ele.click()
    }

    async dropDown(ele: WebdriverIO.ElementArray, text: string){
        let arr = []
        for(let i=0; i<ele.length; i++){
            await ele[i].waitForDisplayed({timeout: 5000, timeoutMsg: 'DD Element is not displayed'})
            let x = await ele[i].getText()
            arr.push(x)
            if(arr[i] === text){
                await ele[i].click()
                break
            }
        }
    }
}