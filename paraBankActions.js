import LOCATORS from "../locators/paraBankLocators";
import { expect } from '@playwright/test';



const goToAboutUs = async(page) =>{
    await page.goto('https://parabank.parasoft.com/parabank/index.html');
    await page.locator(LOCATORS.aboutUsLink).click();

};

const verifyHeaderTitle = async(page) => {
    await expect(page.locator('h1')).toContainText('ParaSoft Demo Website');


};

const verifyRightPanelContent = async(page) =>{
    await expect(page.locator('#rightPanel')).toContainText('ParaSoft Demo Website ParaBank is a demo site used for demonstration of Parasoft software solutions. All materials herein are used solely for simulating a realistic online banking website. In other words: ParaBank is not a real bank! For more information about Parasoft solutions please visit us at: www.parasoft.com or call 888-305-0041');
    await expect(page.locator('#rightPanel')).toContainText('www.parasoft.com');
};

export {goToAboutUs};
export {verifyHeaderTitle};
export {verifyRightPanelContent};