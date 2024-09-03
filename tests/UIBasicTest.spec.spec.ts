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