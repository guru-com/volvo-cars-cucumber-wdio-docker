const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get carsLink () { return $('//*[@id="nav:topNavCarMenu"]/em/span') }
    get electricCarsLink () { return $('//*[@id="site-nav-cars-menu-section-tab-0"]/h2') }
    get suvsLink () { return $('//*[@id="site-nav-cars-menu-section-panel-0"]/h4[2]/div/a') }
    get acceptCookieBtn () { return $('//*[@class="optanon-allow-all accept-cookies-button"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async selectElectricCars () {
        await (await this.carsLink).click ();
        await (await this.electricCarsLink).click ();
        await (await this.suvsLink).click();
    }

    async acceptCookies () {
        await (await this.acceptCookieBtn).click ();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
