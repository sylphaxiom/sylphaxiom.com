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
    await expect(header).toHaveText('Portfolio');

});

test('tab content is visible', async({page})=>{

    const tabContent = page.locator('#port_frame');
    await expect(tabContent).toBeVisible();

});

test('check tabs', async({page})=>{

    const portTab = page.getByRole('tab', { name: 'portfolio' });
    const showTab = page.getByRole('tab', { name: 'showroom' });
    const guestTab = page.getByRole('tab', { name: 'guestbook' });
    const weirdTab = page.getByRole('tab', { name: 'weirdness' });

    const btns = [portTab, showTab, guestTab, weirdTab];
    
    for (const btn of btns) {
        await expect(btn).toBeVisible();
        const controls = await btn.getAttribute('aria-controls');
        console.log("Testing button: " + controls);

        if (!(await btn.isDisabled())) {
            await btn.click();
            await expect(page).toHaveURL('/' + controls);
            await expect(btn).toHaveAttribute('aria-selected', 'true');
            if (!(controls === 'portfolio')) {
                await page.goBack();
            }
        }
    }
});

test('portfolio img has attributes', async({page})=>{

    const img = await page.locator('#port_img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', '/resources/9-2025_headshot_1x1.png');
    await expect(img).toHaveAttribute('width', '300');
    await expect(img).toHaveAttribute('height', '300');
    await expect(img).toHaveAttribute('alt', 'Dapper photo of Jacob Pell with his magnificent beard');
    await expect(img).toHaveCSS('border-radius', '100%');

});

test('has climber', async({page})=>{

    const climber = page.locator('#climber');
    const rope = page.getByRole('img', { name: 'Just a dude rapelling down' })

    await expect(climber).toBeVisible();
    await expect(rope).toBeVisible();

});

test("content link is valid", async({page})=>{

    const contentLink = page.getByRole('link', { name: 'here' });
    await expect(contentLink).toHaveAttribute('href', 'https://a.co/d/6Mezoxp');
    await expect(contentLink).toHaveAttribute('id', 'SotN_ad');

    await contentLink.click();
    await expect(page).toHaveURL(/amazon.com/);

});

test('download resume link works', async({page})=>{

    const downloadLink = page.getByRole('button', { name: 'download_resume' });
    await expect(downloadLink).toHaveAttribute('aria-label', 'download_resume');
    await expect(downloadLink).toHaveAttribute('id', 'resLink');

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
