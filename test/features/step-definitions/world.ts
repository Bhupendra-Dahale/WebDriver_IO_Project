import { setWorldConstructor } from "@cucumber/cucumber";

class CustomWorld{
    testid: string
    constructor() {
        this.testid = ""
    }
}
setWorldConstructor(CustomWorld)