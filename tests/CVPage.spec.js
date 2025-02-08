const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/cv');
})

test('CV Page has title', async ({ page }) => {
    await expect(page).toHaveTitle("Projects");
})

test('', async ({ page }) => {
    await expect(page).toHaveTitle(/Home Page/);
})
