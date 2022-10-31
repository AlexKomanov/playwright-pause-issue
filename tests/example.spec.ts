import { test, expect } from '@playwright/test';
import {allure} from "allure-playwright";

test.beforeEach(async ({page}) => {
    await page.setViewportSize({width: 1920, height: 1080});
})

test('homepage has Playwright in title and get started link linking to the intro page @testing', async ({ page }) => {
  allure.epic('Testing Module');

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByText('Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  await expect(getStarted).toHaveAttribute('href', 'blablabla');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});