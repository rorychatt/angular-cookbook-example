import { test, expect } from '@playwright/test';
import { loginToAdminPage } from './helpers';

test('guard should redirect to main page if direct access', async ({ page }) => {
  await page.goto('/angular-cookbook-example/admin');

  await expect(page).toHaveURL('/angular-cookbook-example/');
});


test('says no items in the basket when basket is empty', async ({ page }) => {
  await loginToAdminPage(page);

  await expect(page.locator(`[data-testid='basket__empty']`)).toBeVisible();
});

test('add item to basket button is disabled when no item is selected', async ({ page }) => {
  await loginToAdminPage(page);

  await expect(page.locator(`[data-testid='select-items_select__btn']`)).toHaveClass(/btn-disabled/);
});

test('should have a select item form', async ({ page }) => {
  await loginToAdminPage(page);

  await expect(page.locator(`[data-testid='select_item__form']`)).toBeVisible();
});
