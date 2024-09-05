import {expect} from "@playwright/test";
import {test} from "../fixtures/firstFixtures";

test.beforeEach(async ({ firstPage }) => {
    await firstPage.navigateToPlaywright();
});

const TODO_ITEMS = [
    'buy some cheese',
    'feed the cat',
    'book a doctors appointment'
] as const;

test('should allow to add todo items', async ({firstPage}) =>{
    await firstPage.fillToDo(TODO_ITEMS[0]);
    await firstPage.enterPress();
    await expect(firstPage.todoTitle).toHaveText(
        [TODO_ITEMS[0]]
    );
});