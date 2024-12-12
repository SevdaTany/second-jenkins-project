import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach to navigate to https://practice.cydeo.com/javascript_alerts
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Regular JS Alert", async ({ page }) => {

    /*
    page.on("dialog", async (dialog) => {
      console.log(`Alert message: ${dialog.message()}`);
      await page.waitForTimeout(3000);
      await dialog.accept();
    });
    */
    let clickForJsAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJsAlertButton.click();

    await expect(page.getByText("You successfully clicked an alert")).toBeVisible();

    await page.waitForTimeout(3000);

  });

  test("JS Confirmation Alert", async ({ page }) => {

    page.on('dialog', async (alert) => {
       console.log(`Alert Message: ${alert.message()}`);
       expect(alert.message()).toBe("I am a JS Confirm");
       await alert.accept();
    });
    
    let clickForJsConfirmButton = page.locator("//button[@onclick='jsConfirm()']");
    await clickForJsConfirmButton.click();

    await page.waitForTimeout(3000);

  });

  test("JS Prompt Alert", async ({ page }) => {
    page.on('dialog', async (alert) => {
       expect(alert.message()).toBe("I am a JS prompt");
       await alert.accept("CYDEO SCHOOL");
    });

    let clickForJsPromptButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJsPromptButton.click();

    await page.waitForTimeout(3000);

    expect(page.locator("//p[@id='result']")).toContainText("CYDEO SCHOOL");
    
  });
});