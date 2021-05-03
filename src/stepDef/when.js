const {When} = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');

When(/^I cick on (electric|hybrid|mild hybrid) cars link$/, async (type) => {
    await HomePage.acceptCookies ();
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
});

When(/^I save element cars on home page$/, async () => {
    await HomePage.acceptCookies ();
    await HomePage.saveElement (HomePage.carsLink,'carsMenu');
});

When(/^I save screen for (electric|hybrid|mild hybrid) cars$/, async (type) => {
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
    await browser.saveScreen('carsType_'+type);
});

When(/^I save element (Volvo SUV|Volvo estate|Volvo sedan) for selected cars type$/, async (element) => {
    if(element === 'Volvo SUV') {
        await HomePage.saveElement (HomePage.volvaSuvText,element);
    }
    if(element === 'Volvo estate') {
        await HomePage.saveElement (HomePage.volvoEstateText,element);
    }
    if(element === 'Volvo sedan') {
        await HomePage.saveElement (HomePage.volvoSedanText,element);
    }
});