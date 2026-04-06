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

    const content = page.locator('#main_home');
    await expect(content).toBeVisible();

});

test('mode switch works', async({page})=>{

    const modeSwitch = page.getByRole('button', { name: 'change mode' });
    
    await expect(modeSwitch).toBeVisible();
    expect(page.locator('html')).toHaveClass('light')

    await modeSwitch.click();
    expect(page.locator('html')).toHaveClass('dark');
    
    await modeSwitch.click();
    expect(page.locator('html')).toHaveClass('light');

});

test('nav buttons are clickable', async({page})=>{

    const portBtn = page.getByRole('link', { name: 'P o r t f o l i o' });
    const showBtn = page.getByRole('link', { name: 'S h o w r o o m' });
    const guestBtn = page.getByRole('link', { name: 'G u e s t b o o k' });
    const weirdBtn = page.getByRole('link', { name: 'W e i r d n e s s' });

    const btns = [portBtn, showBtn, guestBtn, weirdBtn];
    
    for (const btn of btns) {
        await expect(btn).toBeVisible();
        let controls = (await btn.textContent())?.toLowerCase();

        if (!(await btn.isDisabled())) {
            await btn.click();
            await expect(page).toHaveURL('/' + controls);
            await page.goBack();
        }
    }

});




