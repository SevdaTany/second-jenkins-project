import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Check(): checks the radio button and checkbox if they havn't checked yet ", async ({ page }) => {

    let checkboxesLink = page.locator("text='Checkboxes'");
    
    await checkboxesLink.click();

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");


    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();


  });

  test("Uncheck(): unchecks the radio button and checkbox if they havn't unchecked yet ", async ({ page }) => {

    let checkboxesLink = page.locator("text='Checkboxes'");
    
    await checkboxesLink.click();

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");


    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

  });

  test("selectOption(): for drop down boxes", async ({ page }) => {

    let dropdownLink = page.getByText("Dropdown");

    await dropdownLink.click();

    let dropdownBox = page.locator("//select[@id='dropdown']");

    // pause for 3 seconds.
    await page.waitForTimeout(3000);

    // select by value:
   // await dropdownBox.selectOption("1");
   // await page.waitForTimeout(3000);


   // select by text:
  // await dropdownBox.selectOption({label: "Option 1"});
   //await page.waitForTimeout(3000);

   // select by index:
   await dropdownBox.selectOption({index: 1});
   await page.waitForTimeout(3000);

  });


  test("innerText(): retrives the visible text of the elment.", async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");

    let expectedText = "Test Automation Practice";

    await expect(headerElement).toHaveText(expectedText);

    //let actualText = await headerElement.innerText();
    //expect(actualText).toEqual(expectedText);

  });

  // create another test. with empty body.
  test("inputValue()", async ({ page }) => {

    let inputsLink = page.locator("text='Inputs'");

    await inputsLink.click();

    await page.waitForTimeout(3000);

    let numberInputBox = page.locator("//input[@type='number']");

    await numberInputBox.fill("98765");

    await page.waitForTimeout(3000);

    let inputValue = await numberInputBox.inputValue();

    expect(inputValue).toEqual("98765");
    console.log(inputValue);
  });

  // create another test with empty body.
  test("getAttribute()", async ({ page }) => {
    let abTestingLink = page.getByText("A/B Testing");

    let hrefValue = await abTestingLink.getAttribute("href");
    await page.waitForTimeout(3000);

    console.log(hrefValue);
    await page.waitForTimeout(3000);

    expect(hrefValue).toEqual("/abtest");
  });

  // create another test. with empty body.
  test("state methods of locator object.", async ({ page }) => {

    let header2Element = page.getByText("Available Examples");

    expect(await header2Element.isVisible()).toBeTruthy();
    await expect(header2Element).toBeVisible();
    await page.waitForTimeout(3000);


    let abTestingLink = page.getByText("A/B Testing");

    expect( await abTestingLink.isEnabled() ).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
    await page.waitForTimeout(3000);

   // expect( await abTestingLink.isDisabled() ).toBeTruthy();
   // await expect(abTestingLink).toBeDisabled();


  });

  


});






