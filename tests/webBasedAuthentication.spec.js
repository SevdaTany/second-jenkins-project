import { expect, test } from '@playwright/test';

test('Bypass authetication by embedding the credentials in the URL', async ({ page }) => {

    // https://usewrname:password@domainAddress

  // https://practice.cydeo.com/basic_auth
  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");

  // pause the it for 3 seconds.
  await page.waitForTimeout(3000);

  await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible();


});


test('Bypass authetication by encoding the credentials base64 format @sep_login', async ({ page }) => {
      // 1. encoding the credential in base64 format
 
     let encodedCredential = Buffer.from("admin:admin").toString("base64");

//  let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");


  //2. Add the credentials to the HTTP header
  await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredential}`});

  await page.goto("https://practice.cydeo.com/basic_auth")

  await page.waitForTimeout(3000);

  await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible();



  });