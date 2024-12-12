import { expect, test } from "@playwright/test";

test.describe("Array of Elements Test Group", () => {

    let elements;

  // create before each that navigates to https://practice.cydeo.com/.
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify that there are eactly 50 link elements within the <ul> tag", async ({
    page,
  }) => {

    expect(elements.length).toBe(50);
    expect(elements.length).toBeGreaterThanOrEqual(20); // at least 20 links
    expect(elements.length).toBeLessThan(100); // less than 100 links
  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible & clickable", async ({
    page,
  }) => {

    for (let element of elements) {
      await expect(element).toBeVisible();
      // expect(await element.isVisible()).toBeTruthy();

      await expect(element).toBeEnabled();
      // expect(await element.isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({
    page,
  }) => {
    for (let element of elements) {
     await expect(element).toHaveAttribute("href");
     // console.log(`${await element.innerText()}: ${await element.getAttribute("href")}`);
    }
    
  });

});

/*
1. Verify that there are eactly 50 link elements within the <ul> tag.

2. Verify that each of the 50 link elements within the <ul> tag is visible & clickable.

3. Verify that each of the 50 link elements within the <ul> tag has a href attribute.
*/