import {test, expect} from '@playwright/test';

test('UIBasicTest - Browser empty context', async ({page,browser}) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://playwright.dev/');

});

test('UIBasicTest - Browser datas', async ({page,browser}) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://playwright.dev/');

});

test.only('Correct title - playwright page test', async ({page,browser}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const title = await page.title();
    await expect(page).toHaveTitle('React • TodoMVC');
});
