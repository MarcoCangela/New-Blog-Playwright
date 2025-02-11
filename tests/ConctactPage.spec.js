const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/');
})

test('Contact Page has title', async ({ page }) => {
    await expect(page).toHaveTitle("Contact");
})

