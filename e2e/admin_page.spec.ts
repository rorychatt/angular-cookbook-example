import { test, expect } from '@playwright/test';

test('guard should redirect to main page if direct access', async ({ page }) => {
  await page.goto('/angular-cookbook-example/admin');

  await expect(page).toHaveURL('/angular-cookbook-example/');
});
