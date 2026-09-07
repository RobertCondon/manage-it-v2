#!/usr/bin/env node

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Website configuration
const BASE_URL = 'https://manageit.nz';
const PAGES = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'Contact', url: '/contact' },
    { name: 'Cloud Backup', url: '/services/cloud-backup' },
    { name: 'Cloud Migration', url: '/services/cloud-migration' },
    { name: 'Endpoint Management', url: '/services/endpoint-management' },
    { name: 'IT Support', url: '/services/it-support' }
];

async function runLighthouse(page, url) {
    console.log(`🔍 Auditing: ${url}`);
    
    try {
        // Navigate to page
        await page.goto(url, { waitUntil: 'networkidle' });
        
        // Wait a bit for any lazy-loaded content
        await page.waitForTimeout(2000);
        
        // Run basic performance checks
        const metrics = await page.evaluate(() => {
            const performance = window.performance;
            const navigation = performance.getEntriesByType('navigation')[0];
            
            return {
                // Core Web Vitals approximation
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || null,
                firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || null,
                
                // Page info
                title: document.title,
                metaDescription: document.querySelector('meta[name="description"]')?.content || null,
                h1Count: document.querySelectorAll('h1').length,
                imageCount: document.querySelectorAll('img').length,
                imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length,
                
                // Accessibility checks
                missingLabels: document.querySelectorAll('input:not([aria-label]):not([aria-labelledby]):not([title])').length,
                missingHeadings: document.querySelector('h1') ? 0 : 1,
                
                // SEO basics
                hasMetaViewport: !!document.querySelector('meta[name="viewport"]'),
                hasMetaDescription: !!document.querySelector('meta[name="description"]'),
                canonicalLink: document.querySelector('link[rel="canonical"]')?.href || null,
                
                // Performance hints
                scriptsCount: document.querySelectorAll('script').length,
                stylesheetsCount: document.querySelectorAll('link[rel="stylesheet"]').length,
                inlineStylesCount: document.querySelectorAll('style').length,
            };
        });
        
        // Check for console errors
        const consoleErrors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
            }
        });
        
        // Check network requests
        const networkRequests = [];
        page.on('response', response => {
            networkRequests.push({
                url: response.url(),
                status: response.status(),
                size: response.headers()['content-length'] || 'unknown'
            });
        });
        
        return {
            url,
            metrics,
            consoleErrors,
            timestamp: new Date().toISOString()
        };
        
    } catch (error) {
        console.error(`❌ Error auditing ${url}:`, error.message);
        return {
            url,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}

function generateRecommendations(results) {
    const recommendations = [];
    
    for (const result of results) {
        if (result.error) continue;
        
        const { metrics, url } = result;
        const pageRecommendations = [];
        
        // Performance recommendations
        if (metrics.firstContentfulPaint > 2500) {
            pageRecommendations.push({
                category: 'Performance',
                priority: 'High',
                issue: 'Slow First Contentful Paint',
                description: `FCP is ${Math.round(metrics.firstContentfulPaint)}ms (target: <2.5s)`,
                suggestions: [
                    'Optimize images with WebP format',
                    'Minify CSS and JavaScript',
                    'Use a CDN for static assets',
                    'Implement critical CSS inlining'
                ]
            });
        }
        
        // SEO recommendations
        if (!metrics.hasMetaDescription) {
            pageRecommendations.push({
                category: 'SEO',
                priority: 'High',
                issue: 'Missing meta description',
                description: 'Page does not have a meta description tag',
                suggestions: [
                    'Add a unique, descriptive meta description (150-160 characters)',
                    'Include relevant keywords naturally',
                    'Make it compelling to encourage clicks'
                ]
            });
        }
        
        if (metrics.h1Count === 0) {
            pageRecommendations.push({
                category: 'SEO',
                priority: 'High',
                issue: 'Missing H1 tag',
                description: 'Page does not have an H1 heading',
                suggestions: [
                    'Add a single, descriptive H1 tag',
                    'Make it relevant to page content',
                    'Include primary keyword if appropriate'
                ]
            });
        }
        
        if (metrics.h1Count > 1) {
            pageRecommendations.push({
                category: 'SEO',
                priority: 'Medium',
                issue: 'Multiple H1 tags',
                description: `Page has ${metrics.h1Count} H1 tags (should be 1)`,
                suggestions: [
                    'Use only one H1 tag per page',
                    'Convert additional H1s to H2 or H3 tags',
                    'Maintain proper heading hierarchy'
                ]
            });
        }
        
        // Accessibility recommendations
        if (metrics.imagesWithoutAlt > 0) {
            pageRecommendations.push({
                category: 'Accessibility',
                priority: 'High',
                issue: 'Images missing alt text',
                description: `${metrics.imagesWithoutAlt} out of ${metrics.imageCount} images lack alt attributes`,
                suggestions: [
                    'Add descriptive alt text to all images',
                    'Use empty alt="" for decorative images',
                    'Include keywords naturally where appropriate'
                ]
            });
        }
        
        if (metrics.missingLabels > 0) {
            pageRecommendations.push({
                category: 'Accessibility',
                priority: 'High',
                issue: 'Form inputs missing labels',
                description: `${metrics.missingLabels} form inputs lack proper labels`,
                suggestions: [
                    'Add aria-label or aria-labelledby attributes',
                    'Associate labels with form controls',
                    'Ensure all inputs are properly described'
                ]
            });
        }
        
        // Performance recommendations based on resource counts
        if (metrics.scriptsCount > 10) {
            pageRecommendations.push({
                category: 'Performance',
                priority: 'Medium',
                issue: 'Too many JavaScript files',
                description: `Page loads ${metrics.scriptsCount} script files`,
                suggestions: [
                    'Bundle JavaScript files to reduce HTTP requests',
                    'Remove unused JavaScript',
                    'Implement code splitting for better caching'
                ]
            });
        }
        
        if (metrics.stylesheetsCount > 5) {
            pageRecommendations.push({
                category: 'Performance',
                priority: 'Medium',
                issue: 'Too many CSS files',
                description: `Page loads ${metrics.stylesheetsCount} CSS files`,
                suggestions: [
                    'Combine CSS files to reduce HTTP requests',
                    'Remove unused CSS rules',
                    'Inline critical CSS'
                ]
            });
        }
        
        recommendations.push({
            page: url,
            recommendations: pageRecommendations
        });
    }
    
    return recommendations;
}

function generateSummaryReport(results, recommendations) {
    const totalPages = results.length;
    const errorPages = results.filter(r => r.error).length;
    const successPages = totalPages - errorPages;
    
    const allRecommendations = recommendations.flatMap(r => r.recommendations);
    const highPriority = allRecommendations.filter(r => r.priority === 'High').length;
    const mediumPriority = allRecommendations.filter(r => r.priority === 'Medium').length;
    
    const categoryCount = {};
    allRecommendations.forEach(r => {
        categoryCount[r.category] = (categoryCount[r.category] || 0) + 1;
    });
    
    return {
        summary: {
            totalPages,
            successPages,
            errorPages,
            totalIssues: allRecommendations.length,
            highPriorityIssues: highPriority,
            mediumPriorityIssues: mediumPriority,
            issuesByCategory: categoryCount
        },
        topPriorityActions: allRecommendations
            .filter(r => r.priority === 'High')
            .slice(0, 10),
        timestamp: new Date().toISOString()
    };
}

async function main() {
    console.log('🚀 Starting Lighthouse audit for all pages...\n');
    
    // Create reports directory
    const reportsDir = join(__dirname, '../reports');
    try {
        mkdirSync(reportsDir, { recursive: true });
    } catch {
        // Directory already exists
    }
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1200, height: 800 }
    });
    const page = await context.newPage();
    
    const results = [];
    
    // Audit each page
    for (const pageInfo of PAGES) {
        const fullUrl = BASE_URL + pageInfo.url;
        const result = await runLighthouse(page, fullUrl);
        results.push({
            ...result,
            pageName: pageInfo.name
        });
        
        // Small delay between requests
        await page.waitForTimeout(1000);
    }
    
    await browser.close();
    
    // Generate recommendations
    console.log('\n📊 Analyzing results and generating recommendations...');
    const recommendations = generateRecommendations(results);
    const summary = generateSummaryReport(results, recommendations);
    
    // Save detailed results
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    const detailedReport = {
        audit: {
            timestamp: new Date().toISOString(),
            baseUrl: BASE_URL,
            pagesAudited: PAGES.length,
            results,
            recommendations,
            summary
        }
    };
    
    writeFileSync(
        join(reportsDir, `lighthouse-audit-${timestamp}.json`),
        JSON.stringify(detailedReport, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = generateMarkdownReport(summary, recommendations);
    writeFileSync(
        join(reportsDir, `lighthouse-recommendations-${timestamp}.md`),
        markdownReport
    );
    
    // Console summary
    console.log('\n' + '='.repeat(60));
    console.log('🎯 LIGHTHOUSE AUDIT SUMMARY');
    console.log('='.repeat(60));
    console.log(`📄 Pages audited: ${summary.summary.totalPages}`);
    console.log(`✅ Successful: ${summary.summary.successPages}`);
    console.log(`❌ Errors: ${summary.summary.errorPages}`);
    console.log(`🔥 High priority issues: ${summary.summary.highPriorityIssues}`);
    console.log(`⚠️  Medium priority issues: ${summary.summary.mediumPriorityIssues}`);
    console.log('\n📊 Issues by category:');
    Object.entries(summary.summary.issuesByCategory).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} issues`);
    });
    
    console.log(`\n📁 Reports saved to:`);
    console.log(`   - ${reportsDir}/lighthouse-audit-${timestamp}.json`);
    console.log(`   - ${reportsDir}/lighthouse-recommendations-${timestamp}.md`);
    console.log('\n✨ Audit complete!');
}

function generateMarkdownReport(summary, recommendations) {
    let markdown = `# Lighthouse Audit Report\n\n`;
    markdown += `**Generated:** ${new Date().toLocaleDateString()}\n`;
    markdown += `**Website:** ${BASE_URL}\n\n`;
    
    markdown += `## 📊 Executive Summary\n\n`;
    markdown += `- **Total Pages Audited:** ${summary.summary.totalPages}\n`;
    markdown += `- **High Priority Issues:** ${summary.summary.highPriorityIssues}\n`;
    markdown += `- **Medium Priority Issues:** ${summary.summary.mediumPriorityIssues}\n\n`;
    
    markdown += `### Issues by Category\n\n`;
    Object.entries(summary.summary.issuesByCategory).forEach(([category, count]) => {
        markdown += `- **${category}:** ${count} issues\n`;
    });
    
    markdown += `\n## 🔥 Top Priority Actions\n\n`;
    summary.topPriorityActions.forEach((action, index) => {
        markdown += `### ${index + 1}. ${action.issue}\n`;
        markdown += `**Category:** ${action.category} | **Priority:** ${action.priority}\n\n`;
        markdown += `${action.description}\n\n`;
        markdown += `**Recommended Actions:**\n`;
        action.suggestions.forEach(suggestion => {
            markdown += `- ${suggestion}\n`;
        });
        markdown += `\n---\n\n`;
    });
    
    markdown += `## 📋 Detailed Recommendations by Page\n\n`;
    recommendations.forEach(pageRec => {
        if (pageRec.recommendations.length === 0) return;
        
        markdown += `### ${pageRec.page}\n\n`;
        pageRec.recommendations.forEach(rec => {
            markdown += `#### ${rec.issue} (${rec.priority} Priority)\n`;
            markdown += `**Category:** ${rec.category}\n\n`;
            markdown += `${rec.description}\n\n`;
            markdown += `**Solutions:**\n`;
            rec.suggestions.forEach(suggestion => {
                markdown += `- ${suggestion}\n`;
            });
            markdown += `\n`;
        });
        markdown += `---\n\n`;
    });
    
    return markdown;
}

// Run the audit
main().catch(console.error);