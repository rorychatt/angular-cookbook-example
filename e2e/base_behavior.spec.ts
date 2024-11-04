import { test, expect } from '@playwright/test';

test('has correct title on main page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Angular Cookbook Example');
})
