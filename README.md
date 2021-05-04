# volvo-cars-cucumber-wdio-docker

Test Automation frame work developed with technologies Java Script, Cucumber and WebdriverIO.
Integrated docker service with headless browser.
Integrated with docker gird and hub.
Integrated with visual regression service.
Report Integration spec and html reporter.

Setup:

Required Software:
VSCode
Node Js - 14.15.54
gitbash

clone the project and do npm install inside project folder

exetute tests
npm test

Entry point - wdio.config.js

execute tests in chrome local
services: ['chromedriver']

execute tests using docker service
services: ['docker']

execute visual regression tests in chrome local

services: ['chromedriver',
        ['image-comparison']
        
 Contributing:
 
 Feature files path - src/features
 Step definitions path - src/stepDef
 Page Objects - src/pages
 
 Reporting:
 
 Generates html reports in reports folder
 Generates master report/master suite html report in reports folder

