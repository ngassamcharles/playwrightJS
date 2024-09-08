import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Dynamic ID' }).click();
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).click();
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).click();
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).click();
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).click();
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Class Attribute' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Button' }).nth(1).click();
  await page.getByRole('button', { name: 'Button' }).nth(2).click();
  await page.getByRole('button', { name: 'Button' }).first().click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.goto('http://uitestingplayground.com/loaddelay');
  await page.getByRole('button', { name: 'Button Appearing After Delay' }).click();
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Visibility' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('row', { name: 'Hide Zero Width Overlapped' }).getByRole('cell').nth(1).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('link', { name: 'Shadow DOM' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByText('Verify TextFinding an element').click();
  await page.getByRole('link', { name: 'Mouse Over' }).click();
  await page.locator('div').filter({ hasText: /^Click me$/ }).click();
  await page.getByText('Click me').click();
});