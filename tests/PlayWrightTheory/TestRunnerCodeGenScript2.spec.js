import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{
  page = await browser.newPage();
})

test.afterEach(async () =>{

})

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});