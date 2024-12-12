import { expect, test } from '@playwright/test';

test.describe('Web Tables Practices', () => {

    let table;
    let rows;
    let columns;
    let cells;


    // create before each that navigates to https://practice.cydeo.com/web-tables.
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com/web-tables');
      table  = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

      rows = await table.locator("//tr").all(); //table[@id='ctl00_MainContent_orderGrid']//tr
      columns = await table.locator("//th").all(); //table[@id='ctl00_MainContent_orderGrid']//th
      cells = await table.locator("//td").all(); //table[@id='ctl00_MainContent_orderGrid']//td

    });

  test('Verify that there are 9 rows, 13 columns and 104 cells', async ({ page }) => {
   
    expect(rows.length === 9).toBeTruthy();
    expect(columns.length === 13).toBeTruthy();
    expect(cells.length === 104).toBeTruthy();

  });

  test('Read all the data from the table', async ({ page }) => {
    
    /*
    for (let cell of cells) {
        let cellText = await cell.innerText();
        console.log(cellText);
    }
        */

    for(let i = 1; i < rows.length; i++){
        let cellsInRow = await rows[i].locator("//td").all();
        for(let j = 1; j < cellsInRow.length -1; j++){
            let cellText = await cellsInRow[j].innerText();
            console.log(cellText);
        }
        console.log("----------------------------------------------------------------");
    }

  });

  test('Check all the check boxes on the web table', async ({ page }) => {
    let checkBoxes = await table.locator("//input").all();
    for(let checkbox of checkBoxes){
        await checkbox.check();
    }

  });

});