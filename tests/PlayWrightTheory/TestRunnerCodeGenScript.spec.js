import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'Paul Collings' }).click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Search' }).click({
    button: 'right'
  });
  await page.getByText('System UsersUsernameUser Role-- Select --Employee NameStatus-- Select -- Reset S').click();
});