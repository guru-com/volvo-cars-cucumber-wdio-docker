const {Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');
var expect = require('chai').expect

const pages = {
    home: HomePage
}

Then(/^I verify text element (Volvo SUV|Volvo estate|Volvo sedan) is displayed$/, async (element) => {
    if(element === 'Volvo SUV') {
        await HomePage.elementDisplayed (HomePage.volvaSuvText);
    }
    if(element === 'Volvo estate') {
        await HomePage.elementDisplayed (HomePage.volvoEstateText);
    }
    if(element === 'Volvo sedan') {
        await HomePage.elementDisplayed (HomePage.volvoSedanText);
    }
});

Then(/^I verify element (Volvo SUV|Volvo estate|Volvo sedan) for selected cars type$/, async (element) => {
    if(element === 'Volvo SUV') {
        await HomePage.verifyElement (HomePage.volvaSuvText,element);
    }
    if(element === 'Volvo estate') {
        await HomePage.verifyElement (HomePage.volvoEstateText,element);
    }
    if(element === 'Volvo sedan') {
        await HomePage.verifyElement (HomePage.volvoSedanText,element);
    }
});

Then(/^I verify screen for (electric|hybrid|mild hybrid) cars$/, async (type) => {
    await HomePage.clickOnCars ();
    if(type === 'electric') {
        await HomePage.selectElectricCars ();
    }
    if(type === 'hybrid') {
        await HomePage.selectHybridCars ();
    }
    if(type === 'mild hybrid') {
        await HomePage.selectMildHybridCars ();
    }
    expect(await browser.checkScreen('carsType_'+type)).to.equal(0);
});

Then(/^I verify element cars on home page$/, async () => {
    await HomePage.acceptCookies ();
    await HomePage.verifyElement (HomePage.carsLink,'carsMenu');
});