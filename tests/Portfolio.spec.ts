import {test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/portfolio');

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

    await page.close()
});

test('has page header', async({page})=>{
    await page.goto('/portfolio');

    const header = page.locator('h1');
    await expect(header).toHaveText('Creator Portfolio');

    await page.close();
});

test('tab content is visible', async({page})=>{
    await page.goto('/portfolio');

    const tabContent = page.locator('#portfolio_content');
    await expect(tabContent).toBeVisible();

    await page.close();
});

test('check tabs', async({page})=>{
    await page.goto('/portfolio');

    const tabs = page.getByRole('tablist', { name: 'nav tabs' });
    await expect(tabs).toHaveCount(1); // Apparently only non-disabled tabs are counted

    await expect(tabs.getByRole('tab', { name: 'portfolio' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'portfolio' })).toHaveAttribute('aria-selected', 'true'); // Portfolio tab should be selected by default

    await expect(tabs.getByRole('tab', { name: 'web' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'web' })).toHaveAttribute('aria-disabled', 'true'); // Web tab should be disabled

    await expect(tabs.getByRole('tab', { name: 'assets' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'assets' })).toHaveAttribute('aria-disabled', 'true'); // Assets tab should be disabled

    await expect(tabs.getByRole('tab', { name: 'contact' })).toBeVisible();
    await expect(tabs.getByRole('tab', { name: 'contact' })).toHaveAttribute('aria-disabled', 'true'); // Contact tab should be disabled

    await page.close();
});

test('portfolio img has attributes', async({page})=>{
    await page.goto('/portfolio');
    const img = await page.locator('#portfolio_img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', './9-2025_headshot_1x1.png');
    await expect(img).toHaveAttribute('width', '300');
    await expect(img).toHaveAttribute('height', '300');
    await expect(img).toHaveAttribute('alt', 'Dapper photo of Jacob Pell with his magnificent beard');
    await expect(img).toHaveCSS('border-radius', '100%');

    await page.close();
});

test('h2 has creator name', async({page})=>{
    await page.goto('/portfolio');
    const h2 = await page.locator('h2');
    await expect(h2).toHaveText('Jacob Pell');
});

test("content link is valid", async({page})=>{
    await page.goto('/portfolio');
    const contentLink = page.getByRole('link', { name: 'here' });
    await expect(contentLink).toHaveAttribute('href', 'https://a.co/d/6Mezoxp');
    await expect(contentLink).toHaveAttribute('id', 'SotN_ad');

    await contentLink.click();
    await expect(page).toHaveURL(/amazon.com/);

    await page.close();
});

test('check section headers', async({page})=>{  
    await page.goto('/portfolio');
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

    await page.close();
});

test('download resume link works', async({page})=>{
    await page.goto('/portfolio');
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

    await page.close();
});

test('check image visible', async({page})=>{
    await page.goto('/portfolio');
    const img = page.locator('img');
    await expect(img).toHaveCount(43); // There are 43 images on the portfolio page

    await page.close();
});
