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
    const newTabPromise = page.waitForEvent("popup");
    // Then we get the new page as a promise
    const newTab = await newTabPromise;
    //Ensuring that we are redirected to the correct page and that the page title is correct
    console.log('The page title is: ' + await newTab.title());

})

test('External to Linkedin', async ({ page }) => {
    //Link to Linkedin and back 
    await page.getByRole('link', { name: 'Linkedin' }).click();
    const pages = await page.context().pages();
    const newTab = pages[pages.length-1];
    await newTab.waitForLoadState();
})

test('External to Twitter', async ({ page }) => {
    //Link to Twitter and back 
    await page.getByRole('link', { name: 'Twitter' }).click();
    const pages = await page.context().pages();
    const newTab = pages[pages.length-1];
    await newTab.waitForLoadState();
})

