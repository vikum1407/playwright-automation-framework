import {test, expect} from '@playwright/test'

    /**
     * Targging: This should be add with '@' symbol close to the test case name.
     * To Run execute following command:
     *            npx playwright test tests/Tagging.spec.js --project chromium --grep "@sanity"
     *            npx playwright test tests/Tagging.spec.js --project chromium --grep "@sanity@reg"
     * Here you should mention the exact order of tags for multu tags run.
     * 
     * IMPORTANT:
     *     If you wont to run 'reg' tagged test cases that didn't included the 'sanity' test
     *              npx playwright test tests/Tagging.spec.js --project chromium --grep-invert "@sanity"
     */

test('Test1@sanity', async({page}) =>{
    console.log("This is test1...");
});


test('Test2@reg', async({page}) =>{
    console.log("This is test2...");
});


test('Test3@sanity@reg', async({page}) =>{
    console.log("This is test3...");
});



test('Test4@sanity', async({page}) =>{
    console.log("This is test4...");
});



test('Test5@reg', async({page}) =>{
    console.log("This is test5...");
});