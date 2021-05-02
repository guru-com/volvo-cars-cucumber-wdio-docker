const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');

const pages = {
    home: HomePage
}
When(/^I cick on electric cars link$/, async () => {
    await HomePage.acceptCookies ();
    await HomePage.selectElectricCars ();
});

