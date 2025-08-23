import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Sylphaxiom Creations/);

    await page.close()
});

test('navigation and H1', async({page})=>{
    await page.goto('/');

    await page.getByRole('tab', { name: 'Stuff' }).click();
    await expect(page.getByRole("heading")).toContainText('Oh look! Nerdy Stuff...')

    await page.getByRole('tab', { name: 'Things' }).click();
    await expect(page.getByRole("heading")).toContainText('...More Nerdy Things...')

    await page.getByRole('tab', { name: 'Contact' }).click();
    await expect(page.getByRole("heading")).toContainText('Talk Nerdy To Me!')

    await page.getByRole('tab', { name: 'Person' }).click();
    await expect(page.getByRole("heading")).toContainText('This is the Guy...')
    
    await page.close()
})

// await page.goto('/');
// await page.getByRole('tab', { name: 'Stuff' }).click();
// await page.getByRole('tab', { name: 'Things' }).click();
// await page.getByRole('tab', { name: 'Contact' }).click();
// await page.getByRole('tab', { name: 'Person' }).click();
// await page.getByRole('tab', { name: 'Person' }).click();