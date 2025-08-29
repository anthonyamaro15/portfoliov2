/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.anthonyamaro.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'monthly',
  priority: 0.7,
  generateIndexSitemap: true,
  sitemapSize: 7000,
};

