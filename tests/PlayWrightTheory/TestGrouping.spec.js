import {test, expect} from '@playwright/test'

test.beforeAll(async() =>{
    console.log("Before All Hook for execution...");
});

test.afterAll(async() =>{
    console.log("After All Hoo for execution...");
});

test.beforeEach(async() =>{
    console.log("BeforeEach Hook for execution...");
});

test.afterEach(async() =>{
    console.log("After Each Hook for execution...");
});

test.describe.only('Smoke Test', () =>{

    test('Test1', async({page}) =>{
        console.log("test1....");
    });

    test('Test2', async({page}) =>{
        console.log("test2....");
    });

    test('Test3', async({page}) =>{
        console.log("test3....");
    });
    
});

test.describe('Regression Test', () =>{
    test('Test1', async({page}) =>{
        console.log("test1....");
    });

    test('Test2', async({page}) =>{
        console.log("test2....");
    });

    test('Test3', async({page}) =>{
        console.log("test3....");
    });
});