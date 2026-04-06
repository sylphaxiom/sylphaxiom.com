import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {

    // Navigate to the cover page before each test
    await page.goto('/showroom');
    
});

test.afterEach(async ({ page }) => {

    // Close the page after each test
    await page.close();

});

test('has title', async ({ page }) => {

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

});

test('has page header', async({page})=>{

    const header = page.getByText('Showroom', { exact: true });
    await expect(header).toBeVisible();

});

test('img has attributes', async({page})=>{

    const img = page.getByRole('img', { name: 'curious guy in a browser' });
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', '/resources/sylphaxiom_web_512x.svg');
    await expect(img).toHaveAttribute('width', '100');
    await expect(img).toHaveAttribute('height', '100');
   
    await img.click(); // Click the image to navigate back to the cover page
    await expect(page).toHaveURL('/');
    const coverContent = page.locator('#main_home');
    await expect(coverContent).toBeVisible();

});

test('check tabs', async({page})=>{
    const projTab = page.getByRole('tab', { name: 'Projects' });
    const compTab = page.getByRole('tab', { name: 'Components' });
    await expect(compTab).toBeVisible();
    await expect(projTab).toBeVisible();

    const projHead = page.getByRole('heading', {name:'Web Projects'})
    const projTitle_sylphaxiom = page.getByRole('heading', { name: 'Sylphaxiom Creative' })
    const projLink_sylphaxiom = page.getByRole('link', { name: 'Click me to visit the site' }).first()
    const projTitle_kothis = page.getByRole('heading', { name: 'Kothis Portal' })
    const projLink_kothis = page.getByRole('link', { name: 'Click me to visit the site' }).nth(1)
    await expect(projTab).toHaveAttribute('aria-selected', 'true');
    await expect(projHead).toBeVisible();

    // sylphaxiom.com project
    await expect(projTitle_sylphaxiom).toBeVisible();
    await expect(projLink_sylphaxiom).toBeVisible();
    await projTitle_sylphaxiom.click();
    await expect(page).toHaveURL('https://sylphaxiom.com');
    await page.goBack();
    await expect(page).toHaveURL('/showroom');

    // kothis.sylphaxiom.com project
    await projTitle_kothis.click();
    await expect(page).toHaveURL('https://kothis.sylphaxiom.com');
    await page.goBack();
    await expect(projLink_kothis).toBeVisible();
    await expect(projTitle_kothis).toBeVisible();

});