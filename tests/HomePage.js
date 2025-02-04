const {test, expect} = require('@playwright/test')

test.beforeAll(({page}) => {
    page.goto('127.0.0.1:3000');
})

test('Homepage has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Home Page/);
})