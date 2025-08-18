import { test, expect } from '@playwright/test';

test.describe('Application Smoke Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  test('about us page loads correctly', async ({ page }) => {
    await page.goto('/about-us');
    await expect(page.locator('body')).toBeVisible();
  });

  test('contact page loads correctly', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('body')).toBeVisible();
  });

  test('cloud migration service page loads correctly', async ({ page }) => {
    await page.goto('/services/cloud-migration');
    await expect(page.locator('body')).toBeVisible();
  });

  test('cloud backup service page loads correctly', async ({ page }) => {
    await page.goto('/services/cloud-backup');
    await expect(page.locator('body')).toBeVisible();
  });

  test('endpoint management service page loads correctly', async ({ page }) => {
    await page.goto('/services/endpoint-management');
    await expect(page.locator('body')).toBeVisible();
  });

  test('IT support service page loads correctly', async ({ page }) => {
    await page.goto('/services/it-support');
    await expect(page.locator('body')).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to about us
    await page.click('a[href="/about-us"]');
    await expect(page).toHaveURL(/about-us/);
    
    // Test navigation to contact
    await page.goto('/');
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL(/contact/);
  });
});