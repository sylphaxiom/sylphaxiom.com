import {test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

    await page.close()
});

test('cover image has attributes', async({page})=>{
    await page.goto('/');
   const coverImage = await page.locator('img[alt="curious guy in a browser"]');
   await expect(coverImage).toBeVisible();
   await expect(coverImage).toHaveAttribute('src', '/sylphaxiom_web_512x.svg');
   await expect(coverImage).toHaveAttribute('width', '100');
   await expect(coverImage).toHaveAttribute('height', '100');

    await page.close();
});

test('cover image is animating', async({page})=>{
    await page.goto('/');
    const coverImage = await page.locator('img[alt="curious guy in a browser"]');
    const initialTransform = await coverImage.evaluate((el) => getComputedStyle(el).transform);
    await page.waitForTimeout(1000);
    const finalTransform = await coverImage.evaluate((el) => getComputedStyle(el).transform);
    await expect(initialTransform).not.toEqual(finalTransform);

    await page.close();
});

test('cover buttons are clickable', async({page})=>{
    await page.goto('/');    
    const creativeButton = await page.getByRole('button', { name: 'Sylphaxiom Creative' });
    const portfolioButton = await page.getByRole('button', { name: 'Jacob Pell Portfolio' });

    await expect(creativeButton).toBeVisible();
    await expect(portfolioButton).toBeVisible();

    await creativeButton.click();
    await expect(page).toHaveURL(/creative/);

    await page.goto('/'); // Navigate back to the cover page

    await portfolioButton.click();
    await expect(page).toHaveURL(/portfolio/);

    await page.close();
});
