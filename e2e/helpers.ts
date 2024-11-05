import { Page } from '@playwright/test';

export async function loginToAdminPage(page: Page) {
  await page.goto('/');
  await page.click(`[data-testid='login-admin__button']`);
}
