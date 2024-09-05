import {Locator, Page} from "@playwright/test";

export class FirstPage{

    constructor(private page: Page) {}

    public newTodo: Locator = this.page.getByPlaceholder('What needs to be done?');
    public todoTitle: Locator = this.page.getByTestId('todo-title');

    async navigateToPlaywright(): Promise<void> {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async fillToDo(text: string): Promise<void> {
         await this.newTodo.fill(text);
    }

    async enterPress(): Promise<void> {
        await this.newTodo.press('Enter');
    }

}

