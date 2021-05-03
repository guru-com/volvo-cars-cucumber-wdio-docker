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