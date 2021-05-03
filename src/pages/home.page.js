const Page = require('./page');
var expect = require('chai').expect
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get carsLink () { return $('//span[text()="Cars"]') }
    get hybridsLink () { return $('//h2[text()="Hybrids"]') }
    get sedanLink () { return $('(//a[text()="Sedans"]) [1]') }
    get volvoSedanText () { return $('//*[text()="Volvo sedan"]') }
    get mildHybridCarsLink () { return $('//h2[text()="Mild hybrids"]') }
    get EstatesLink () { return $('(//a[text()="Estates"]) [2]') }
    get volvoEstateText () { return $('//h1[text()="Volvo estate"]') }
    get electricLink () { return $('//h2[text()="Electric"]') }
    get suvsLink () { return $('(//a[text()="SUVs"]) [1]') }
    get volvaSuvText () { return $('//*[text()="Volvo SUV"]') }
    get acceptCookieBtn () { return $('//*[@class="optanon-allow-all accept-cookies-button"]') }

    async clickOnCars () {
        await (await this.carsLink).click ();
    }

    async selectElectricCars () {
        await (await this.electricLink).click ();
        await (await this.suvsLink).click();
    }

    async selectHybridCars () {
        await (await this.hybridsLink).click ();
        await (await this.sedanLink).click();
    }

    async selectMildHybridCars () {
        await (await this.mildHybridCarsLink).click ();
        await (await this.EstatesLink).click();
    }

    async acceptCookies () {
        await (await this.acceptCookieBtn).click ();
    }

    async elementDisplayed (element) {
        const result = await (await (element)).isDisplayed ();
        expect(result, `element is not displayed`).to.be.true;

    }

    /**s
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
