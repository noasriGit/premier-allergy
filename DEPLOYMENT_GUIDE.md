# Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Create `.env.local` file with production variables
- [ ] Update Google verification codes
- [ ] Set up Google Analytics 4
- [ ] Configure domain DNS settings

### 2. Content Review
- [ ] All images optimized and loading correctly
- [ ] All links working (internal and external)
- [ ] Contact forms functional
- [ ] Patient portal links correct
- [ ] Phone numbers and addresses accurate

### 3. SEO Verification
- [ ] All 301 redirects tested
- [ ] Sitemap generated and ready
- [ ] Robots.txt configured
- [ ] Meta descriptions unique and compelling
- [ ] Schema markup validated

## 📦 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
```

### Option 2: Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the .next folder to Netlify
```

### Option 3: Traditional Hosting
```bash
# Build the project
npm run build

# Upload files to hosting provider
# Ensure .htaccess is in public folder
```

## 🔧 Post-Deployment Tasks

### 1. Domain Configuration
- [ ] Point domain to hosting provider
- [ ] Set up SSL certificate
- [ ] Configure www/non-www redirect
- [ ] Test all redirects work

### 2. Google Services Setup
- [ ] Add domain to Google Search Console
- [ ] Submit sitemap: `https://www.allergyandasthmaclinicalcenters.com/sitemap.xml`
- [ ] Set up Google Analytics 4
- [ ] Update Google My Business with new website

### 3. Testing
- [ ] Test all pages load correctly
- [ ] Verify 301 redirects work
- [ ] Check mobile responsiveness
- [ ] Test contact forms
- [ ] Verify patient portal links

### 4. Monitoring Setup
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up performance monitoring
- [ ] Create backup strategy

## 🎯 Critical URLs to Test

### Main Pages
- `/` - Homepage
- `/services` - Services overview
- `/services/asthma` - Asthma service page
- `/meet-our-doctor` - Doctor page
- `/contact` - Contact page
- `/locations` - Locations page

### Redirects to Test
- `/nasal_allergies_clinic_MD_VA.html` → `/services/nasal-allergies`
- `/asthma_clicnic_MD_VA.html` → `/services/asthma`
- `/allergy-asthma-doctor-MD-VA.html` → `/meet-our-doctor`
- `/online-payment` → Patient portal

### External Links
- Patient Portal: `https://allergyandasthmaclinicalcenters.imscare.com/abs/login`
- Payment Portal: `https://portal.allergyandasthmaclinicalcenters.com/general/index.php`

## 📊 Performance Targets

- **Page Load Time**: < 3 seconds
- **Mobile Score**: > 90 (Google PageSpeed)
- **Desktop Score**: > 95 (Google PageSpeed)
- **Core Web Vitals**: All green

## 🔍 SEO Monitoring

### Week 1 Post-Launch
- [ ] Monitor Google Search Console for errors
- [ ] Check 404 errors
- [ ] Verify indexing of new pages
- [ ] Monitor redirect chains

### Month 1 Post-Launch
- [ ] Review organic traffic trends
- [ ] Check keyword rankings
- [ ] Monitor local search performance
- [ ] Analyze user behavior

## 🆘 Troubleshooting

### Common Issues
1. **Redirects not working**: Check Next.js config and server configuration
2. **Images not loading**: Verify image paths and optimization settings
3. **SSL issues**: Ensure certificate is properly installed
4. **Performance issues**: Check image optimization and caching

### Support Contacts
- **Hosting Provider**: Contact your hosting provider for server issues
- **Domain Registrar**: Contact for DNS issues
- **Google Support**: For Search Console and Analytics issues

---

**Ready for deployment!** 🚀
