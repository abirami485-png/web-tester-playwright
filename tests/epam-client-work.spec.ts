import { test, expect } from '@playwright/test';

test('navigate to EPAM client work from Services header', async ({ page }) => {
  await page.goto('https://www.epam.com');

  await page.getByRole('link', { name: /services/i }).click();
  await page.getByRole('link', { name: /explore our client work/i }).click();

  await expect(page.getByText(/client work/i)).toBeVisible();
});
