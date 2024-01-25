import { test, expect } from '@playwright/test';
import LOCATORS from '../pageObjects/locators/paraBankLocators';
import { goToAboutUs } from '../pageObjects/actions/paraBankActions';
import { verifyHeaderTitle } from '../pageObjects/actions/paraBankActions';
import { verifyRightPanelContent } from '../pageObjects/actions/paraBankActions';

test('Verify About Us Page Content on ParaBank Website', async ({ page }) => {
  await goToAboutUs(page);
  await verifyHeaderTitle(page, 'ParaSoft Demo Website ParaBank is a demo site used for demonstration of Parasoft software solutions. All materials herein are used solely for simulating a realistic online banking website. In other words: ParaBank is not a real bank! For more information about Parasoft solutions please visit us at: www.parasoft.com or call 888-305-0041');
  await verifyRightPanelContent(page,);


  //await page.goto('https://parabank.parasoft.com/parabank/index.html');
  //await page.locator('#headerPanel').getByRole('link', { name: 'About Us' }).click();
  //await expect(page.locator('h1')).toContainText('ParaSoft Demo Website');
  //await expect(page.locator('#rightPanel')).toContainText('ParaSoft Demo Website ParaBank is a demo site used for demonstration of Parasoft software solutions. All materials herein are used solely for simulating a realistic online banking website. In other words: ParaBank is not a real bank! For more information about Parasoft solutions please visit us at: www.parasoft.com or call 888-305-0041');
  //await expect(page.locator('#rightPanel')).toContainText('www.parasoft.com');
});


//1. locators
//2. actionslsks
