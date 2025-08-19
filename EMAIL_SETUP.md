# Email Setup Instructions

## SendGrid Configuration

### 1. Create SendGrid Account
1. Go to https://sendgrid.com/
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### 2. Get API Key
1. Log into SendGrid dashboard
2. Go to Settings → API Keys
3. Click "Create API Key"
4. Choose "Full Access" (or "Restricted Access" with Mail Send permissions)
5. Name it something like "manageit-website"
6. Copy the API key (you won't see it again!)

### 3. Verify Sender Identity
1. Go to Settings → Sender Authentication
2. Choose "Single Sender Verification" (easiest for small volume)
3. Add your email (e.g., info@manageit.nz)
4. Fill out the form and verify the email

### 4. Add Environment Variables to Netlify
1. Go to your Netlify dashboard
2. Select your site
3. Go to Site settings → Environment variables
4. Add these variables:

```
SENDGRID_API_KEY = your_api_key_here
TO_EMAIL = info@manageit.nz (where emails should be sent)
FROM_EMAIL = info@manageit.nz (must match verified sender)
```

### 5. Deploy
1. Push your code to git
2. Netlify will automatically deploy
3. Your forms should now send emails!

## Testing
- Test both forms:
  - Contact form: `/contact`
  - Quote form: `/` (bottom of homepage)
- Check your email for submissions
- Check Netlify function logs if issues occur

## Troubleshooting
- Emails in spam folder? Add your domain to SendGrid's domain authentication
- Function errors? Check Netlify function logs
- No emails received? Verify TO_EMAIL environment variable

## Email Volume
- SendGrid free tier: 100 emails/day
- Perfect for your 0-15 emails/week needs
- Can upgrade if needed later