import { test, expect, Page } from '@playwright/test';
import { loginToAdminPage } from './helpers';

test('guard should redirect to main page if direct access', async ({ page }) => {
  await page.goto('/angular-cookbook-example/admin');

  await expect(page).toHaveURL('/angular-cookbook-example/');
});


test('says no items in the basket when basket is empty', async ({ page }) => {
  await loginToAdminPage(page);

  await expect(page.locator(`[data-testid='basket__empty']`)).toBeVisible();
});
