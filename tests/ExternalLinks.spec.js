const {test, expect} = require('@playwright/test')

test.beforeEach(({page}) => {
    page.goto('http://localhost:4321/');
})

test('External Link to Github', async ({ page }) => {
    //Link to Github
})

test('External Link to Medium', async ({ page }) => {
    //Link to medium
})

test('External to Linkedin', async ({ page }) => {
    //Link to Linkkedin and back 
    
})