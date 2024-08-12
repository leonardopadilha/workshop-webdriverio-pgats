const { remote } = require('webdriverio')
const assert = require('node:assert')

const androidCapabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    'appium:appPackage': 'com.qazandoqafood',
    'appium:appActivity': '.MainActivity',
    'appium:app': 'C:\\Users\\user\\Documents\\Cursos\\Mobile\\automacao\\udemy\\qazando\\challenges\\teste\\mobile\\workshop-webdriverio-pgats\\app\\qafoodcompletao.apk',
    'appium:noReset': true
}


const options = {
    hostName: '127.0.0.1',
    port: 4723,
    capabilities: androidCapabilities
}

async function runTest() {
    const driver = await remote(options)
    
    try {
        await driver.$("accessibility id:email").setValue('teste@teste.com')
        await driver.$("accessibility id:password").setValue('123456')
        await driver.$("accessibility id:login-button").click()
    
        await driver.pause(3000)
    
        const campoSearch = await driver.$("accessibility id:search-field")
        assert(campoSearch, 'O campo de pesquisa deveria estar visivel')
    } finally {
        await driver.pause(1000)
        await driver.deleteSession()
    }
}

async function runTest2() {
    const driver = await remote(options)

    try {
        await driver.$("accessibility id:email").setValue('teste@teste.com')
        await driver.$("accessibility id:password").setValue('123456')
        await driver.$("accessibility id:login-button").click()
    
        await driver.pause(3000)
    
        const campoSearch = await driver.$("accessibility id:search-field")
        assert(campoSearch, 'O campo de pesquisa deveria estar visivel')
    } finally {
        await driver.pause(1000)
        await driver.deleteSession()
    }
}



runTest()
runTest2()


/*
appium --allow-cors => Utilizado para que o inspector web consiga acesso a máquina
https://inspector.appiumpro.com/
*/