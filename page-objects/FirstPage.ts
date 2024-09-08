import {Locator, Page} from "@playwright/test";

export class FirstPage{

    constructor(private page: Page) {}

    public todoTitle: Locator = this.page.getByTestId('todo-title');
    public newTodo2: Locator = this.page.locator('#new-task');

    async navigateToMS(): Promise<void> {
        await this.page.goto('https://microsoftedge.github.io/Demos/demo-to-do/');
    }

    async fillToDo(text: string): Promise<void> {
        await this.newTodo2.fill(text);
    }

    async enterPress(): Promise<void> {
        await this.newTodo2.press('Enter');
    }

}