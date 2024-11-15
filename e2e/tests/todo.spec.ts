import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { TodoPage } from '../pages/todo-page';

let todoPage:any;
let item:any;
test.describe(`check user is able to create todo`, () => {

  test.beforeEach(async ({ page }) => {
    // Listen for any errors in the response or console
    todoPage = new TodoPage(page);
    item = faker.person.firstName();
    await page.goto('');
  });
  test(`verify the user is able to create todo successfully @e2e`,async({page})=>{
    await todoPage.createTodo(item);
  });
  test.afterEach(async ({ page }) => {
  });
});
