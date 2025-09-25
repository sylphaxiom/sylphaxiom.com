import {test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/creative');

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

    await page.close()
});

test('has page header', async({page})=>{
    await page.goto('/creative');

    const header = page.locator('h1');
    await expect(header).toHaveText('Sylphaxiom Creative');

    await page.close();
});

test('home tab content is visible', async({page})=>{
    await page.goto('/creative');

    const homeTabContent = page.locator('#home_content');
    await expect(homeTabContent).toBeVisible();

    await page.close();
});

test('check tabs', async({page})=>{
    await page.goto('/creative');

    const tabs = page.getByRole('tablist', { name: 'nav tabs' });
    await expect(tabs).toHaveCount(1); // Apparently only non-disabled tabs are counted

    await expect(tabs.getByRole('tab', { name: 'home' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'home' })).toHaveAttribute('aria-selected', 'true'); // Home tab should be selected by default

    await expect(tabs.getByRole('tab', { name: 'people' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'people' })).toHaveAttribute('aria-disabled', 'true'); // People tab should be disabled

    await expect(tabs.getByRole('tab', { name: 'projects' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'projects' })).toHaveAttribute('aria-disabled', 'true'); // Projects tab should be disabled

    await expect(tabs.getByRole('tab', { name: 'contact' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'contact' })).toHaveAttribute('aria-disabled', 'true'); // Contact tab should be disabled

    await page.close();
});

test('img has attributes', async({page})=>{
    await page.goto('/creative');
    const img = await page.getByRole('img', { name: 'curious guy in a browser' });
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', '/sylphaxiom_web_512x.svg');
    await expect(img).toHaveAttribute('width', '100');
    await expect(img).toHaveAttribute('height', '100');
   
    await img.click(); // Click the image to navigate back to the cover page
    await expect(page).toHaveURL('/');
    const coverContent = await page.locator('#entryway');
    await expect(coverContent).toBeVisible();

    await page.close();
});