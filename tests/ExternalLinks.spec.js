const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/');
})

test('External Link to Github', async ({ page }) => {
    //Link to Github
    await page.getByRole('link', { name: 'Github' }).click();

})

test('External Link to Medium', async ({ page }) => {
    //Link to medium
    await page.getByRole('link', { name: 'Medium' }).click();

})

test('External to Linkedin', async ({ page }) => {
    //Link to Linkkedin and back 
    await page.getByRole('link', { name: 'Linkedin' }).click();
})

test('External to Twitter', async ({ page }) => {
    //Link to Twitter and back 
    await page.getByRole('link', { name: 'Twitter' }).click();
})

