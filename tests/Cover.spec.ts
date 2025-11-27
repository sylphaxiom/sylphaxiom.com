import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Navigate to the cover page before each test
    await page.goto('/');
});

test.afterEach(async ({ page }) => {
    // Close the page after each test
    await page.close();
});

test('has title', async ({ page }) => {

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

});

test('has content', async({page})=>{

    const content = page.locator('#entryway');
    await expect(content).toBeVisible();

});

test('cover image has attributes', async({page})=>{

   const coverImage = page.locator('img[alt="curious guy in a browser"]');
   await expect(coverImage).toBeVisible();
   await expect(coverImage).toHaveAttribute('src', '/resources/sylphaxiom_web_512x.svg');
   await expect(coverImage).toHaveAttribute('width', '100');
   await expect(coverImage).toHaveAttribute('height', '100');

});

test('cover image is animating', async({page})=>{

    const coverImage = page.locator('img[alt="curious guy in a browser"]');
    const initialTransform = await coverImage.evaluate((el) => getComputedStyle(el).transform);
    await page.waitForTimeout(1000);
    const finalTransform = await coverImage.evaluate((el) => getComputedStyle(el).transform);
    expect(initialTransform).not.toEqual(finalTransform);

});

test('cover buttons are clickable', async({page})=>{

    const creativeButton = page.getByRole('button', { name: 'Sylphaxiom Creative' });
    const portfolioButton = page.getByRole('button', { name: 'Creator Portfolio' });

    await expect(creativeButton).toBeVisible();
    await expect(portfolioButton).toBeVisible();

    await creativeButton.click();
    await expect(page).toHaveURL(/creative/);

    await page.goto('/'); // Navigate back to the cover page

    await portfolioButton.click();
    await expect(page).toHaveURL(/portfolio/);

});
