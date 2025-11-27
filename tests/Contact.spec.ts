import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Navigate to the cover page before each test
    await page.goto('/contact');
});

test.afterEach(async ({ page }) => {
    // Close the page after each test
    await page.close();
});

test('form Service elements present', async({page}) => {
    await expect(page.locator('form')).toBeVisible();
    const svcRadio = page.getByRole('radio', { name: 'Services Inquiry' });
    await expect(svcRadio).toBeChecked()
    const radioSub = page.getByText('Inquire')
    await expect(radioSub).toHaveText('Inquire about having a website, asset, or anything else you want created.')
    const nameField = page.getByRole('textbox', { name: 'Name' })
    await expect(nameField).toBeVisible()
    await expect(nameField).toBeEmpty()
    await expect(nameField).toBeEditable()
    const emailField = page.getByRole('textbox', { name: 'email' })
    await expect(emailField).toBeVisible()
    await expect(emailField).toBeEmpty()
    await expect(emailField).toBeEditable()
    const messageField = page.getByRole('textbox', { name: 'Stuff...' })
    await expect(messageField).toBeVisible()
    await expect(messageField).toBeEmpty()
    await expect(messageField).toBeEditable()
    const charCounter = page.getByText('character(s)')
    await expect(charCounter).toHaveText('0 character(s)')
    const subButton = page.getByRole('button', {name:'Submit'})
    await expect(subButton).toBeVisible()
});

test('form Webmaster elements present', async({page})=>{
    const webRadio = page.getByRole('radio', { name: 'Webmaster' });
    webRadio.click()
    await expect(webRadio).toBeVisible()
    await expect(webRadio).toBeChecked()
    const radioSub = page.getByText('Contact the')
    await expect(radioSub).toHaveText('Contact the Webmaster with any issues or inquiries relating to this website')
    const subjectField = page.getByRole('textbox', {name: 'Subject'});
    await expect(subjectField).toBeVisible()
    await expect(subjectField).toBeEmpty()
    await expect(subjectField).toBeEditable()
    
});

test('form Creator elements present', async({page})=>{
    const creRadio = page.getByRole('radio', { name: 'Creator' });
    creRadio.click();
    await expect(creRadio).toBeVisible()
    await expect(creRadio).toBeChecked()
    const radioSub = page.getByText('Reach out')
    await expect(radioSub).toHaveText('Reach out to a creator directly... for whatever reason, I guess.')
    const creHead = page.getByText('Creators');
    await expect(creHead).toBeVisible()
    const jacobCheck = page.getByRole('checkbox', { name: 'Jacob' })
    const tyCheck = page.getByRole('checkbox', { name: 'Ty' })
    await expect(jacobCheck).toBeVisible()
    await expect(jacobCheck).toBeChecked()
    const jacobHead = page.getByText('Jacob will')
    await expect(jacobHead).toBeVisible()
    await expect(jacobCheck).toBeVisible()
    tyCheck.click()
    await expect(tyCheck).toBeChecked()
    const tyHead = page.getByText('Ty will')
    await expect(tyHead).toBeVisible()
})

test('check name error states', async({page})=>{
    
    const subButton = page.getByRole('button', {name:'Submit'})
    await expect(subButton).toBeVisible()
    subButton.click()

    const nameField = page.getByRole('textbox', { name: 'Name' })
    const nameErrEmpty = page.getByText('Name field cannot be blank.')

    await expect(nameField).toBeVisible()
    await expect(nameErrEmpty).toBeVisible()
    await expect(nameField).toBeEmpty()
    await expect(nameField).toBeEditable()

    nameField.fill('test')
    subButton.click()
    await expect(nameErrEmpty).not.toBeVisible()

    nameField.fill('test1')
    subButton.click()
    const nameErrNum = page.getByText('Only letters and spaces')
    await expect(nameErrNum).toBeVisible()

})

test('check email error states', async({page})=>{
    
    const subButton = page.getByRole('button', {name:'Submit'})
    await expect(subButton).toBeVisible()
    subButton.click()

    const emailField = page.getByRole('textbox', { name: 'email' })
    const emailErr = page.getByText('Check your email address')

    await expect(emailField).toBeVisible()
    await expect(emailErr).toBeVisible()
    await expect(emailField).toBeEmpty()
    await expect(emailField).toBeEditable()

    emailField.fill('test')
    subButton.click()
    await expect(emailErr).toBeVisible()

    emailField.fill('test@email.com')
    subButton.click()
    await expect(emailErr).not.toBeVisible()
})

test('check message error states', async({page})=>{

    const subButton = page.getByRole('button', {name:'Submit'})
    await expect(subButton).toBeVisible()
    subButton.click()

    const messageField = page.getByRole('textbox', { name: 'Stuff...' })
    const messageErr = page.getByText('Message cannot be empty.')
    
    await expect(messageField).toBeVisible()
    await expect(messageErr).toBeVisible()
    await expect(messageField).toBeEmpty()
    await expect(messageField).toBeEditable()

    messageField.fill('abcdefghij')
    subButton.click()
    await expect(messageErr).not.toBeVisible()
    
    const charCounter = page.getByText('character(s)')
    await expect(charCounter).toHaveText('10 character(s)')

})

test('check valid send (API only)', async({page})=>{
    const nameField = page.getByRole('textbox', { name: 'Name' })
    const emailField = page.getByRole('textbox', { name: 'Email' })
    const messageField = page.getByRole('textbox', { name: 'Stuff...' })
    const subButton = page.getByRole('button', {name:'Submit'})
    
    await expect(nameField).toBeVisible()
    await expect(emailField).toBeVisible()
    await expect(messageField).toBeVisible()
    await expect(subButton).toBeVisible()

    await nameField.click()
    await nameField.fill('test')
    await emailField.click()
    await emailField.fill('test@email.com')
    await messageField.click()
    await messageField.fill('abcdefghij')
    subButton.click()

    const successMsg = page.getByText('Thanks for your message!Email')
    await expect(successMsg).toBeVisible()
    
    await expect(nameField).toBeVisible({timeout:15000})
    await expect(nameField).toBeEmpty()
    await expect(emailField).toBeVisible()
    await expect(emailField).toBeEmpty()
    await expect(messageField).toBeVisible()
    await expect(messageField).toBeEmpty()
    await expect(subButton).toBeVisible()
})