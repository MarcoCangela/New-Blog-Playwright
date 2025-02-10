const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/blog');
})

test('Blog Page Page has title', async ({ page }) => {
    await expect(page).toHaveTitle("Blog");
})

test('', async ({ page }) => {
    await expect(page).toHaveTitle(/Home Page/);
})
