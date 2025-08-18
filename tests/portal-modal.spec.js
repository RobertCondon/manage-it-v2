import { test, expect } from '@playwright/test';

test.describe('Portal Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens portal modal when portal button is clicked on desktop', async ({ page }) => {
    // Click the Portal button
    await page.click('button:has-text("Portal")');
    
    // Check that modal opens
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
    await expect(page.locator('text=Client Portal')).toBeVisible();
    await expect(page.locator('text=Quick access to all your IT services and tools')).toBeVisible();
  });

  test('displays all 6 portal services with correct icons and descriptions', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    
    // Check all 6 services are present
    await expect(page.locator('text=Remote Access')).toBeVisible();
    await expect(page.locator('text=Access your computer remotely from anywhere')).toBeVisible();
    
    await expect(page.locator('text=Ticket Management')).toBeVisible();
    await expect(page.locator('text=Submit and track support tickets')).toBeVisible();
    
    await expect(page.locator('text=Office 365 Emails')).toBeVisible();
    await expect(page.locator('text=Access your Office 365 email')).toBeVisible();
    
    await expect(page.locator('text=Office 365 Portal')).toBeVisible();
    await expect(page.locator('text=Access Office 365 applications and services')).toBeVisible();
    
    await expect(page.locator('text=FortiClient SSL VPN')).toBeVisible();
    await expect(page.locator('text=Secure VPN access to your network')).toBeVisible();
    
    await expect(page.locator('text=Labtech Agent Install')).toBeVisible();
    await expect(page.locator('text=Download and install monitoring agent')).toBeVisible();
  });

  test('service links open in new tab and point to correct URLs', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    
    // Check all service links have correct attributes and URLs
    const serviceLinks = [
      { name: 'Remote Access', url: 'https://manage-it.screenconnect.com/' },
      { name: 'Ticket Management', url: 'https://aus.myconnectwise.net/support/index.htm?Company=Manag31t' },
      { name: 'Office 365 Emails', url: 'https://outlook.office365.com/' },
      { name: 'Office 365 Portal', url: 'https://portal.office365.com/' },
      { name: 'FortiClient SSL VPN', url: 'https://www.fortinet.com/products/endpoint-security/forticlient' },
      { name: 'Labtech Agent Install', url: 'https://labtech.manageit.nz/WCC2/Home/Login?ReturnUrl=%2fWCC2%2f' }
    ];

    for (const service of serviceLinks) {
      const serviceLink = page.locator(`a:has-text("${service.name}")`);
      await expect(serviceLink).toHaveAttribute('href', service.url);
      await expect(serviceLink).toHaveAttribute('target', '_blank');
      await expect(serviceLink).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('closes modal when X button is clicked', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
    
    // Click close button
    await page.click('[aria-label="Close portal modal"]');
    
    // Check that modal is closed
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).not.toBeVisible();
  });

  test('closes modal when clicking backdrop', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
    
    // Click backdrop (outside modal content)
    await page.locator('.fixed.inset-0').click({ position: { x: 50, y: 50 } });
    
    // Check that modal is closed
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).not.toBeVisible();
  });

  test('closes modal when pressing Escape key', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
    
    // Press Escape key
    await page.keyboard.press('Escape');
    
    // Check that modal is closed
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).not.toBeVisible();
  });

  test('contact support link in modal footer works correctly', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    
    // Check contact support link
    const contactLink = page.locator('a:has-text("Contact our support team")');
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('modal has proper accessibility attributes', async ({ page }) => {
    // Open portal modal
    await page.click('button:has-text("Portal")');
    
    // Check modal dialog attributes
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();
    await expect(modal).toHaveAttribute('aria-modal', 'true');
    await expect(modal).toHaveAttribute('aria-labelledby', 'portal-modal-title');
  });

  test('works on mobile navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile nav using the hamburger menu icon specifically
    await page.locator('[aria-label="bars outline"]').click();
    
    // Click Portal in mobile nav
    await page.locator('text=Portal').click();
    
    // Check that modal opens
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
    await expect(page.locator('text=Client Portal')).toBeVisible();
    
    // Check mobile nav drawer is closed (by checking the drawer heading)
    await expect(page.locator('h5:has-text("Manage It")')).not.toBeVisible();
  });

  test('modal displays correctly on different screen sizes', async ({ page }) => {
    // Test on tablet (desktop nav available)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.click('button:has-text("Portal")');
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
    await page.keyboard.press('Escape');

    // Test on desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.click('button:has-text("Portal")');
    await expect(page.locator('[aria-labelledby="portal-modal-title"]')).toBeVisible();
  });
});