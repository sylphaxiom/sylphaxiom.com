import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {

    // Navigate to the cover page before each test
    await page.goto('/creative');
    
});

test.afterEach(async ({ page }) => {

    // Close the page after each test
    await page.close();

});

test('has title', async ({ page }) => {

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

});

test('has page header', async({page})=>{

    const header = page.locator('h1');
    await expect(header).toHaveText('Sylphaxiom Creative');

});

test('home tab content is visible', async({page})=>{

    const homeTabContent = page.locator('#home_content');
    await expect(homeTabContent).toBeVisible();

});

test('check tabs', async({page})=>{

    const menu = page.locator('#nav_drawer');
    const tabs = page.getByRole('tablist', { name: 'nav tabs' });

    if (await menu.isVisible()) {
        await menu.click();

        await expect(menu).toHaveCount(1)

        await expect(menu.getByRole('menuitem', { name: 'home' })).toBeVisible();
        await expect(menu.getByRole('menuitem', { name: 'home' })).toHaveAttribute('aria-selected', 'true'); // Home tab should be selected by default

        await expect(menu.getByRole('menuitem', { name: 'people' })).toBeVisible();
        await expect(menu.getByRole('menuitem', { name: 'people' })).toHaveAttribute('aria-disabled', 'true'); // People tab should be disabled

        await expect(menu.getByRole('menuitem', { name: 'projects' })).toBeVisible();
        await expect(menu.getByRole('menuitem', { name: 'projects' })).toHaveAttribute('aria-disabled', 'true'); // Projects tab should be disabled

        await expect(menu.getByRole('menuitem', { name: 'contact' })).toBeVisible();
        await expect(menu.getByRole('menuitem', { name: 'contact' })).toHaveAttribute('aria-disabled', 'true'); // Contact tab should be disabled
    }

    if (await tabs.isVisible()) {
        await expect(tabs).toHaveCount(1); // Apparently only non-disabled tabs are counted

        await expect(tabs.getByRole('tab', { name: 'home' })).toBeVisible();
        await expect(tabs.getByRole('tab', { name: 'home' })).toHaveAttribute('aria-selected', 'true'); // Home tab should be selected by default

        await expect(tabs.getByRole('tab', { name: 'people' })).toBeVisible();
        await expect(tabs.getByRole('tab', { name: 'people' })).toHaveAttribute('aria-disabled', 'true'); // People tab should be disabled

        await expect(tabs.getByRole('tab', { name: 'projects' })).toBeVisible();
        await expect(tabs.getByRole('tab', { name: 'projects' })).toHaveAttribute('aria-disabled', 'true'); // Projects tab should be disabled

        await expect(tabs.getByRole('tab', { name: 'contact' })).toBeVisible();
        await expect(tabs.getByRole('tab', { name: 'contact' })).toHaveAttribute('aria-disabled', 'true'); // Contact tab should be disabled
    }

});

test('img has attributes', async({page})=>{

    const img = await page.getByRole('img', { name: 'curious guy in a browser' });
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', '/resources/sylphaxiom_web_512x.svg');
    await expect(img).toHaveAttribute('width', '100');
    await expect(img).toHaveAttribute('height', '100');
   
    await img.click(); // Click the image to navigate back to the cover page
    await expect(page).toHaveURL('/');
    const coverContent = await page.locator('#entryway');
    await expect(coverContent).toBeVisible();

});