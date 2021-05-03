const {Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');

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