const { test, expect } = require("@playwright/test");

const url = "http://localhost:4321/";

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  expect(await page.title()).toBe("Marco Garujo | Portfolio Website");
  await page.screenshot({ path: 'screenshot.png' });
});

test('Homepage has title', async ({ page }) => {
    await expect(page).toHaveTitle("Marco Garujo | Portfolio Website");
})

test('Click the Connect button on page', async ({ page }) => {
  await page.getByRole('link', { name: 'Let\'s connect!' }).click();})

test('Click on a project from List', async ({ page }) => {

})

test('Click on a Blog from Medium List', async ({ page }) => {

})