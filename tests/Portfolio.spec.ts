import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    
    await page.goto('/portfolio');

});

test.afterEach(async ({ page }) => {

    await page.close();

});

test('has title', async ({ page }) => {

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

});

test('has page header', async({page})=>{

    const header = page.locator('h1');
    await expect(header).toHaveText('Creator Portfolio');

});

test('tab content is visible', async({page})=>{

    const tabContent = page.locator('#portfolio_content');
    await expect(tabContent).toBeVisible();

});

test('check tabs', async({page})=>{

    const links = ['portfolio', 'web', 'assets', 'writing', 'contact'];
    const menu = page.locator('#nav_drawer');
    const tabs = page.getByRole('tablist', { name: 'nav tabs' });
    const item = menu || tabs
    const type = (item === menu) ? 'menuitem' : 'tab'

    await item.isVisible()

    if (item === menu){
        await menu.click();
    }

    await expect(item).toHaveCount(1)

    for await (const link of links) {
        await expect(page.getByRole(type, { name: link })).toBeVisible();
        if (link === 'portfolio') {
            await expect(page.getByRole(type, { name: link })).toHaveAttribute('class', /Mui-selected/);
        } else {
            await expect(page.getByRole(type, { name: link })).toHaveAttribute('aria-disabled', 'true');
        }
    }
});

test('portfolio img has attributes', async({page})=>{

    const img = await page.locator('#portfolio_img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', './9-2025_headshot_1x1.png');
    await expect(img).toHaveAttribute('width', '300');
    await expect(img).toHaveAttribute('height', '300');
    await expect(img).toHaveAttribute('alt', 'Dapper photo of Jacob Pell with his magnificent beard');
    await expect(img).toHaveCSS('border-radius', '100%');

});

test('h2 has creator name', async({page})=>{

    const h2 = await page.locator('h2');
    await expect(h2).toHaveText('Jacob Pell');

});

test("content link is valid", async({page})=>{

    const contentLink = page.getByRole('link', { name: 'here' });
    await expect(contentLink).toHaveAttribute('href', 'https://a.co/d/6Mezoxp');
    await expect(contentLink).toHaveAttribute('id', 'SotN_ad');

    await contentLink.click();
    await expect(page).toHaveURL(/amazon.com/);

});

test('check section headers', async({page})=>{

    const sectionHeaders = page.locator('h5');
    await expect(sectionHeaders).toHaveCount(9);
    await expect(sectionHeaders.nth(0)).toHaveText('Full-Stack Developer');
    await expect(sectionHeaders.nth(1)).toHaveText('Automation and Scripting Specialist');
    await expect(sectionHeaders.nth(2)).toHaveText('Author/Worldbuilder');
    await expect(sectionHeaders.nth(3)).toHaveText('A Brief History...');
    await expect(sectionHeaders.nth(4)).toHaveText('The Skills...');
    await expect(sectionHeaders.nth(5)).toHaveText('Sylphaxiom Creative');
    await expect(sectionHeaders.nth(6)).toHaveText('Asset/Logo Creation');
    await expect(sectionHeaders.nth(7)).toHaveText('Worldbuilding/Storytelling');
    await expect(sectionHeaders.nth(8)).toHaveText('Web Development/Scripting');

});

test('download resume link works', async({page})=>{

    const downloadLink = page.getByLabel('download_resume');
    await expect(downloadLink).toHaveAttribute('aria-label', 'download_resume');
    await expect(downloadLink).toHaveAttribute('id', 'ballet');

    // Start waiting for the download before clicking.
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      downloadLink.click()
    ]);
    expect(download.suggestedFilename()).toContain('jacob_pell_resume.pdf');
    // Save downloaded file somewhere
    const cv = await download.saveAs('./test-results/' + download.suggestedFilename());
    expect(cv).not.toBeNull();
    await download.delete();

});

test('GitHub link works', async({page})=>{

    const downloadLink = page.locator('#ghLink');
    await expect(downloadLink).toHaveAttribute('href', 'https://github.com/sylphaxiom');
    await expect(downloadLink).toHaveAttribute('aria-label', 'github.com/sylphaxiom');

    await downloadLink.click();
    await expect(page).toHaveURL('https://github.com/sylphaxiom');

});

test('LinkedIn link works', async({page})=>{

    const downloadLink = page.locator('#liLink');
    await expect(downloadLink).toHaveAttribute('aria-label', 'linkedin.com/in/sylphaxiom');
    await expect(downloadLink).toHaveAttribute('href', 'https://www.linkedin.com/in/sylphaxiom/');

    await downloadLink.click();
    await expect(page).toHaveURL(/www.linkedin.com/);

});

test('check image visible', async({page})=>{

    const img = page.locator('img');
    await expect(img).toHaveCount(45); // There are 45 images on the portfolio page after adding ghLogo and liLogo

});
