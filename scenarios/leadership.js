const { expect } = require('@playwright/test');

exports.scenario = {
   name: 'Load the leadership page',
   run: async function scenario({ page, baseURL}) {
    await page.goto(`${baseURL}/`);

    await page.getByRole('button', { name: 'About' }).click();

    await page.getByLabel('Main navigation').getByRole('link', { name: 'Leadership' }).click();

    await expect(page.getByRole('heading', { name: 'Leadership at The MBTA' })).toBeVisible();
  },
  threshold: 2500,
};