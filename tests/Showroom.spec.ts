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

test('check projects tab', async({page})=>{
    const projTab = page.getByRole('tab', { name: 'Projects' });
    await expect(projTab).toBeVisible();

    await projTab.click();

    const projHead = page.getByRole('heading', {name:'Web Projects'})
    await expect(projTab).toHaveAttribute('aria-selected', 'true');
    await expect(projHead).toBeVisible();

    // sylphaxiom.com project
    const projTitle_sylphaxiom = page.getByRole('heading', { name: 'Sylphaxiom Creative' })
    const projLink_sylphaxiom = page.getByRole('link', { name: 'Click me to visit the site' }).first()
    await expect(projTitle_sylphaxiom).toBeVisible();
    await expect(projLink_sylphaxiom).toBeVisible();
    await projLink_sylphaxiom.click();
    await expect(page).toHaveURL('https://sylphaxiom.com');
    await page.goBack();
    await expect(page).toHaveURL('/showroom');

    // kothis.sylphaxiom.com project
    const projTitle_kothis = page.getByRole('heading', { name: 'Kothis Portal' })
    const projLink_kothis = page.getByRole('link', { name: 'Click me to visit the site' }).nth(1)
    await expect(projTitle_kothis).toBeVisible();
    await expect(projLink_kothis).toBeVisible();
    await projLink_kothis.click();
    await expect(page).toHaveURL('https://kothis.sylphaxiom.com');
    await page.goBack();
});

test('check components tab', async({page})=>{
    const compTab = page.getByRole('tab', { name: 'Components' });
    await expect(compTab).toBeVisible();

    await compTab.click();
    const compHead = page.getByRole('heading', {name:'Web Components'})
    await expect(compTab).toHaveAttribute('aria-selected', 'true');
    await expect(compHead).toBeVisible();

    // skill tiles component
    const compTitle_skill = page.getByRole('heading', { name: 'Skill Tiles' })
    const compFrame_skill = page.locator('iframe').first()
    const frameTitle_skill = compFrame_skill.contentFrame().getByText('Tiles', {exact:true}) //.getByText('Tiles', { exact: true })

    await expect(compTitle_skill).toBeVisible();
    await expect(compFrame_skill).toBeVisible();
    await expect(frameTitle_skill).toBeVisible();

    // interactive map component
    const compTitle_map = page.getByRole('heading', { name: 'Interactive Map' })
    const compFrame_map = page.locator('iframe').nth(1)
    const frameTitle_map = compFrame_map.contentFrame().getByText('Kothis', {exact:true}) //.getB

    await expect(compTitle_map).toBeVisible();
    await expect(compFrame_map).toBeVisible();
    await expect(frameTitle_map).toBeVisible();

});