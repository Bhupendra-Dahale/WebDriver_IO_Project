import { config as baseConfig } from "../wdio.conf.ts"
export const config = Object.assign(baseConfig, {
    // All test env specific key values pairs
    environment: "TEST",
    sauceDemoUrl: "https://www.saucedemo.com/",
    OpenHrmUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
})

// Object.assign(target, source) // this is used to specify env specific variable from source to target