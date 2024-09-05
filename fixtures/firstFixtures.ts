import {test as baseTest} from '@playwright/test';
import {FirstPage} from "../page-objects/FirstPage";


export const test = baseTest.extend<{
    firstPage: FirstPage
}> ({
    firstPage: async ({page}, use) => {
        await use(new FirstPage(page));
    }
});