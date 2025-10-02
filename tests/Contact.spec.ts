import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Navigate to the cover page before each test
    await page.goto('/portfolio/contact');
});

test.afterEach(async ({ page }) => {
    // Close the page after each test
    await page.close();
});