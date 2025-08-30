module.exports = {
    siteUrl: 'https://www.allergyandasthmaclinicalcenters.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://www.allergyandasthmaclinicalcenters.com/sitemap.xml',
      ],
    },
    exclude: ['/404', '/500'],
    generateIndexSitemap: false,
  }
  