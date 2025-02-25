const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/');
})

test('Click on contact to send email', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
})

