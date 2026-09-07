import { test, expect } from '@playwright/test';

test.describe('About Us Page Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about-us');
  });

  test('displays modern hero section with nature green theme', async ({ page }) => {
    // Check for main heading with gradient text
    await expect(page.locator('text=About ManageIT')).toBeVisible();
    
    // Check for trust badge
    await expect(page.locator('text=Your Trusted IT Partner')).toBeVisible();
    
    // Check for stats section
    await expect(page.locator('.text-3xl.font-bold.text-green-700:has-text("20+")')).toBeVisible();
    await expect(page.locator('text=Years Experience')).toBeVisible();
    await expect(page.locator('.text-3xl.font-bold.text-emerald-700:has-text("24/7")')).toBeVisible();
    await expect(page.locator('text=Support Available')).toBeVisible();
    await expect(page.locator('.text-3xl.font-bold.text-teal-700:has-text("100+")')).toBeVisible();
    await expect(page.locator('text=Happy Clients')).toBeVisible();
    
    // Check for background gradient
    await expect(page.locator('.bg-gradient-to-br.from-emerald-50')).toBeVisible();
  });

  test('displays modernized feature cards with green theme', async ({ page }) => {
    // Check section header
    await expect(page.locator('text=Our Foundation')).toBeVisible();
    await expect(page.locator('text=Built on Excellence')).toBeVisible();
    
    // Check all four feature cards
    await expect(page.locator('h3:has-text("Who We Are")')).toBeVisible();
    await expect(page.locator('h3:has-text("What We Do")')).toBeVisible();
    await expect(page.locator('h3:has-text("Our Approach")')).toBeVisible();
    await expect(page.locator('h3:has-text("Experience the Difference")')).toBeVisible();
    
    // Check for modern card styling
    await expect(page.locator('.rounded-3xl.shadow-lg').first()).toBeVisible();
    
    // Check for green gradient icons
    await expect(page.locator('.bg-gradient-to-br.from-green-500').first()).toBeVisible();
  });

  test('displays values and mission section', async ({ page }) => {
    // Check mission section
    await expect(page.locator('text=Our Mission')).toBeVisible();
    await expect(page.locator('h2:has-text("Turning Complex Problems")')).toBeVisible();
    await expect(page.locator('h2:has-text("Into Simple Solutions")')).toBeVisible();
    
    // Check value points
    await expect(page.locator('h3:has-text("Clear Communication")')).toBeVisible();
    await expect(page.locator('h3:has-text("Personalized Service")')).toBeVisible();
    await expect(page.locator('h3:has-text("Local Expertise")')).toBeVisible();
    
    // Check founder card
    await expect(page.locator('h3:has-text("Tony Condon")')).toBeVisible();
    await expect(page.locator('text=Founder & IT Director')).toBeVisible();
  });

  test('has responsive design and proper spacing', async ({ page }) => {
    // Check for proper section spacing
    await expect(page.locator('section').first()).toBeVisible();
    
    // Check for responsive grid layouts
    await expect(page.locator('.grid.gap-8.md\\:grid-cols-2.lg\\:grid-cols-4')).toBeVisible();
    await expect(page.locator('.grid.gap-12.lg\\:grid-cols-2')).toBeVisible();
    
    // Check for proper padding
    await expect(page.locator('.px-\\[10vw\\]').first()).toBeVisible();
  });

  test('maintains proper content structure and readability', async ({ page }) => {
    // Check that key company information is present
    await expect(page.locator('text=ManageIT was established on April 2, 2004')).toBeVisible();
    await expect(page.locator('h3:has-text("Tony Condon")')).toBeVisible();
    await expect(page.locator('p:has-text("Turning complex problems into simple solutions")')).toBeVisible();
    
    // Check that all original content sections are preserved
    const content = await page.textContent('body');
    expect(content).toContain('Managed Service Provider');
    expect(content).toContain('people-driven');
    expect(content).toContain('clear communication');
    expect(content).toContain('personalized service');
  });

  test('has proper color scheme using nature greens', async ({ page }) => {
    // Check for green gradient backgrounds
    await expect(page.locator('.from-green-600.via-emerald-600.to-teal-600')).toBeVisible();
    await expect(page.locator('.from-green-100.to-emerald-100').first()).toBeVisible();
    
    // Check for green accent colors in stats
    await expect(page.locator('.text-green-700').first()).toBeVisible();
    await expect(page.locator('.text-emerald-700')).toBeVisible();
    await expect(page.locator('.text-teal-700')).toBeVisible();
  });
});