
## Nodejs Installation

   * Nodejs Installation - https://nodejs.org/en/download
    
## Playwright Installation

   * Playwright Installation - https://playwright.dev/docs/intro

## Description and File Structure

   * Developed this framework based on the Page Object Model structure. 
   * All object repositories maintained by the relevant pages.
   * Main test cases written on the 'tests' folder.
        
## Run Command

*   Through the browser
 ```bash
npx playwright test --headed
 ```

* Command line
 ```bash
npx playwright test "tests/<file-name.spec.js>"
 ```

* By default tests will run on 3 browsers parallel.
* To run specific browser
 ```bash
npx playwright test <file_name> --project=chromium 
 ```

* To run debug mode
```bash
npx playwright test --debug 
 ```

 ## Allure Report

* Added following allure report to the playwright.config.js file
```bash
 reporter: [
    ['html'],
    ['allure-playwright']
  ], 
 ```

* Run the following command to add the allure install line to the package.json file
```bash
npm i -D @playwright/test allure-playwright
 ```

* Then run the test
```bash
npx playwright test 
 ```

* Run the following command to install allure commandline
```bash
npm install -D allure-commandline
 ```

* Run the following command to generate the allure report
```bash
npx allure generate ./allure-report --clean
 ```

* Run the following command to open the allure web
```bash
npx allure open ./allure-report
 ```

