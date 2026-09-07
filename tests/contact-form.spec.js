import { test, expect } from '@playwright/test';

test.describe('Contact Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    // The form posts to the Netlify Forms endpoint at '/', which does not exist
    // under `vite preview`. Stub it so submission paths are testable locally
    // and in CI. The delay keeps the "Sending..." state observable.
    await page.route(
      (url) => url.pathname === '/',
      async (route) => {
        if (route.request().method() !== 'POST') {
          return route.fallback();
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        await route.fulfill({ status: 200, contentType: 'text/html', body: 'OK' });
      }
    );

    await page.goto('/contact');
  });

  test('displays validation errors for empty form submission', async ({ page }) => {
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check that validation errors appear
    await expect(page.locator('text=Name is required')).toBeVisible();
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Message is required')).toBeVisible();
  });

  test('validates name field correctly', async ({ page }) => {
    // Test single character name
    await page.fill('#name', 'A');
    await page.locator('#email').click(); // Trigger blur by clicking elsewhere
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    
    // Test valid name
    await page.fill('#name', 'John Doe');
    await page.locator('#email').click(); // Trigger blur by clicking elsewhere
    await expect(page.locator('text=Name must be at least 2 characters')).not.toBeVisible();
  });

  test('validates email field correctly', async ({ page }) => {
    // Test invalid email
    await page.fill('#email', 'invalid-email');
    await page.locator('#message').click(); // Trigger blur by clicking elsewhere
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible();
    
    // Test valid email
    await page.fill('#email', 'john@example.com');
    await page.locator('#message').click(); // Trigger blur by clicking elsewhere
    await expect(page.locator('text=Please enter a valid email address')).not.toBeVisible();
  });

  test('validates message field correctly', async ({ page }) => {
    // Test short message
    await page.fill('#message', 'Short');
    await page.locator('#name').click(); // Trigger blur by clicking elsewhere
    await expect(page.locator('text=Message must be at least 10 characters')).toBeVisible();
    
    // Test valid message
    await page.fill('#message', 'This is a valid message with more than 10 characters');
    await page.locator('#name').click(); // Trigger blur by clicking elsewhere
    await expect(page.locator('text=Message must be at least 10 characters')).not.toBeVisible();
  });

  test('successfully submits valid form', async ({ page }) => {
    // Fill out valid form
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#message', 'This is a test message for the contact form validation.');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Check for loading state
    await expect(page.locator('text=Sending...')).toBeVisible();
    
    // Wait for success message
    await expect(page.locator('text=Message Sent!')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Thank you for contacting us. We\'ll get back to you within 24 hours.')).toBeVisible();
  });

  test('shows loading state during form submission', async ({ page }) => {
    // Fill out form
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#message', 'Test message for loading state check.');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Check loading state appears
    await expect(page.locator('text=Sending...')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    
    // Check that form fields are disabled during submission
    await expect(page.locator('#name')).toBeDisabled();
    await expect(page.locator('#email')).toBeDisabled();
    await expect(page.locator('#message')).toBeDisabled();
  });

  test('allows sending another message after successful submission', async ({ page }) => {
    // Submit a message first
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#message', 'First test message.');
    await page.click('button[type="submit"]');
    
    // Wait for success and click "Send Another Message"
    await expect(page.locator('text=Message Sent!')).toBeVisible({ timeout: 10000 });
    await page.click('text=Send Another Message');
    
    // Check that form is reset and visible again
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#name')).toHaveValue('');
    await expect(page.locator('#email')).toHaveValue('');
    await expect(page.locator('#message')).toHaveValue('');
  });

  test('displays modern design elements correctly', async ({ page }) => {
    // Check for modern design elements
    await expect(page.locator('h1:has-text("Get in Touch")')).toBeVisible();
    await expect(page.locator('text=Send us a Message')).toBeVisible();
    await expect(page.locator('h3:has-text("Visit Us")')).toBeVisible();
    await expect(page.locator('h3:has-text("Call Us")')).toBeVisible();
    await expect(page.locator('h3:has-text("Response Time")')).toBeVisible();
    await expect(page.locator('text=Why Choose Manage IT?')).toBeVisible();
    
    // Check that the form has modern styling classes
    await expect(page.locator('.bg-white.rounded-3xl.shadow-xl').first()).toBeVisible();
  });
});