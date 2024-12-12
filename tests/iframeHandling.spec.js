import { test } from '@playwright/test';

test('SEP iframe', async ({ page }) => {

    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${code}`,
    });

    await page.goto(process.env.SEP_QA_URL);

    // step 1:
    let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");
    await firstNameInputBox.fill('Sevda');

    let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");
    await lastNameInputBox.fill('Tan');

    let emailInputBox = page.locator("//input[@formcontrolname='email']");
    await emailInputBox.fill('sevda@example.com');

    let phoneInputBox = page.locator("//input[@formcontrolname='phoneNumber']");
    await phoneInputBox.fill('123456789');

    let howDidYouHearDropdown = page.locator("//mat-label[text()='How did you hear about us?']");
    await howDidYouHearDropdown.click();

    let emailOption = page.locator("//span[text()='Email']");
    await emailOption.click();

    let nextButton01 = page.locator("//button[@type='submit' and text()=' Next']");
    await nextButton01.click();

    await page.waitForTimeout(3000);

    // step 2:
    let upfrontPaymentPlanOption =page.locator("//mat-expansion-panel-header[.//span[text()=' Upfront ']]");
    await upfrontPaymentPlanOption.click(); 

    let nextButton02 = page.locator("//button[text()='Next']");
    await nextButton02.click();

    await page.waitForTimeout(3000);

     // step 3: Review step (iframe)

     let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");

     let cardNumberInput = paymentFrame.locator("//input[@id='Field-numberInput']");
     await cardNumberInput.fill(process.env.CARD_NUMBER);
 
     let expirationDateInput = paymentFrame.locator("//input[@id='Field-expiryInput']");
     await expirationDateInput.fill(process.env.EXPIRATION_DATE);
 
     let cvcInput = paymentFrame.locator("//input[@id='Field-cvcInput']");
     await cvcInput.fill(process.env.CVC_NUMBER);
 
     let zipCodeInput = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
     await zipCodeInput.fill(process.env.ZIP_CODE);
 
     let termsAndConditionsCheckBox = page.locator("//input[@type='checkbox']");
     await termsAndConditionsCheckBox.click();
 
     let payButton = page.locator("//button[.//span[text()='Pay']]");
     await payButton.click();

     await page.waitForTimeout(13000);
 
    

  
});