import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Angular Cookbook Example');
});

test('login as admin button navigates to admin page', async ({ page }) => {
  await page.goto('/');

  await page.click(`[data-testid='login-admin__button']`);

  await expect(page).toHaveURL('/angular-cookbook-example/admin');
});

test('login as employee button navigates to admin page', async ({ page }) => {
  await page.goto('/');

  await page.click(`[data-testid='login-employee__button']`);

  await expect(page).toHaveURL('/angular-cookbook-example/employee');
});
