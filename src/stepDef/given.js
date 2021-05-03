const { Given} = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    await browser.maximizeWindow();
});
