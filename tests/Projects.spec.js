const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/projects');
})

test('Projects Page has title', async ({ page }) => {
    await expect(page).toHaveTitle("Projects");
})

test('', async ({ page }) => {
})
