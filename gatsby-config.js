module.exports = {
    flags: {
        DEV_SSR: true
      },
    plugins: [
        {
            resolve: 'gatsby-theme-portfolio-minimal',
            options: {
                // siteUrl: "https://example.com", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/waving-hand.png', // Path is relative to the root
                    siteName: 'eric tuovila', // Used in manifest.json
                    shortName: 'tuovila', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                contentDirectory: './content',
                blogSettings: {
                    path: '/blog', // Defines the slug for the blog listing page
                    usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
                },
            },
            
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-K4GTT8V",
              includeInDevelopment: false,
              defaultDataLayer: function () {
                return {
                  pageType: window.pageType,
                }
              },
              routeChangeEventName: "routeChangeEvent",
              enableWebVitalsTracking: false,
            },
          },
    ],
};
