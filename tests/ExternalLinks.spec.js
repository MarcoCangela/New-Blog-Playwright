const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/');
})

test('External Link to Github', async ({ page }) => {
    //
})

test('External Link to Medium', async ({ page }) => {
    //
})

test('External to Linkedin', async ({ page }) => {
    //
})