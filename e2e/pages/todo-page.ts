import { expect, Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class TodoPage {

    readonly page:Page;
    readonly todoInput:Locator;
    readonly todoList:Locator;
    readonly todoText:Locator;

    constructor(page:Page){
        this.page = page;
        this.todoInput = page.locator('#todo-input');
        this.todoList= page.locator('ul[class="todo-list"]>li');
        this.todoText= page.locator('label[data-testid="todo-item-label"]');
    
    }
    async createTodo(item:any)
    {
        await this.todoInput.fill(item);
        await this.todoInput.press('Enter');
        await expect(this.todoList).toHaveCount(1);

    }
}