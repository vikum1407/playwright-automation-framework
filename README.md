
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