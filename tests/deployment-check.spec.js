import { test, expect } from '@playwright/test';

// This test checks for deployment issues like missing assets
test.describe('Deployment Verification', () => {
  const pages = [
    '/',
    '/about-us',
    '/contact',
    '/services/cloud-backup',
    '/services/cloud-migration', 
    '/services/endpoint-management',
    '/services/it-support'
  ];

  for (const pagePath of pages) {
    test(`${pagePath} loads without 404 errors`, async ({ page }) => {
      // Track failed requests
      /** @type {{ url: string, status: number, statusText: string }[]} */
      const failedRequests = [];
      page.on('response', response => {
        if (response.status() >= 400) {
          failedRequests.push({
            url: response.url(),
            status: response.status(),
            statusText: response.statusText()
          });
        }
      });

      // Navigate to page
      await page.goto(pagePath);
      
      // Wait for page to fully load
      await page.waitForLoadState('networkidle');
      
      // Check for failed requests
      if (failedRequests.length > 0) {
        console.error('Failed requests on', pagePath, ':', failedRequests);
      }
      
      expect(failedRequests, `Page ${pagePath} has failed asset requests: ${JSON.stringify(failedRequests)}`).toHaveLength(0);
      
      // Verify page actually loaded (not error page)
      await expect(page).not.toHaveTitle(/error|404|500/i);
      
      // Check for basic content (page didn't crash)
      const body = await page.textContent('body');
      expect(body).toBeTruthy();
      expect((body ?? '').length).toBeGreaterThan(100);
    });
  }

  test('all pages load and render correctly', async ({ page }) => {
    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
      
      // Check page doesn't show error. SvelteKit's error page puts the status
      // code in the heading, so match that rather than any text on the page.
      const hasError =
        (await page.locator('h1').filter({ hasText: /^\s*(404|500)\s*$/ }).count()) > 0;
      expect(hasError, `Page ${pagePath} shows error`).toBe(false);
      
      // Check basic navigation elements exist. There are two <nav> elements
      // (header and footer), so scope to the first.
      await expect(page.locator('nav').first()).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
    }
  });
});