const {ReportAggregator, HtmlReporter} = require('@rpii/wdio-html-reporter');
const log4js = require('@log4js-node/log4js-api');
const logger = log4js.getLogger('default');
const { join } = require('path');
exports.config = {
    runner: 'local',
    // hostname: 'localhost',
    // port: 4444,
    // path: '/wd/hub',
    specs: [
        './src/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        //Uncomment while executing using docker
        // 'goog:chromeOptions': {
        //     // to run chrome headless the following flags are required
        //     args: ['--no-sandbox', '--headless', '--disable-dev-shm-usage']
        // }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    //uncomment while executing in local
    // services: ['chromedriver'],
    services: ['chromedriver',
        ['image-comparison',
        // The options
        {
            // Some options, see the docs for more
            baselineFolder: join(process.cwd(), './src/visualRegressionTests/screenshots/'),
            formatImageName: '{tag}-{logName}-{width}x{height}',
            screenshotPath: join(process.cwd(), './src/visualRegressionTests/screenshots/'),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            // NOTE: When you are testing a hybrid app please use this setting
            isHybridApp: false,
            // Options for the tabbing image
            tabbableOptions:{
                circle:{
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line:{
                    color: '#ff221a', // hex-code or for example words like `red|black|green`
                    width: 3,
                },
            }
            // ... more options
        }],
    ],
    // uncomment while using docker service to execute
    // services: ['docker'],
    //uncomment while executing without Grid+Node in docker
    // dockerOptions: {
    //     image: 'selenium/standalone-chrome',
    //     healthCheck: 'https://localhost:4444',
    //     options: {
    //         p: ['4444:4444'],
    //         shmSize: '2g'
    //     }
    // },
    framework: 'cucumber',
    specFileRetries: 0,
    specFileRetriesDelay: 0,
    reporters: ['spec',
    [HtmlReporter, {
        debug: true,
        outputDir: './reports/html-reports/',
        filename: 'report.html',
        reportTitle: 'Volva Cars Test',
        
        //to show the report in a browser when done
        showInBrowser: true,

        //to turn on screenshots after every test
        useOnAfterCommandForScreenshot: true,
        LOG: log4js.getLogger("default")
    }
    ]],
    cucumberOpts: {
        require: ['./src/stepDef/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: false,
        source: true,
        profile: [],
        strict: true,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        let reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName : capabilities.browserName,
            collapseTests: true,
        });
        reportAggregator.clean() ;

        global.reportAggregator = reportAggregator;
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    onWorkerStart: function (cid, caps, specs, args, execArgv) {
    },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs) {
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    beforeCommand: function (commandName, args) {
    },
    /**
     * Runs before a Cucumber feature
     */
    beforeFeature: function (uri, feature) {
    },
    /**
     * Runs before a Cucumber scenario
     */
    beforeScenario: function (world) {
    },
    /**
     * Runs before a Cucumber step
     */
    beforeStep: function (step, context) {
    },
    /**
     * Runs after a Cucumber step
     */
    afterStep: function (step, context) {
    },
    /**
     * Runs after a Cucumber scenario
     */
    afterScenario: function (world) {
    },
    /**
     * Runs after a Cucumber feature
     */
    afterFeature: function (uri, feature) {
    },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    afterCommand: function (commandName, args, result, error) {
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) {
    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport();
        })();
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    onReload: function(oldSessionId, newSessionId) {
    }
}
