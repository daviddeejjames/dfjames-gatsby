module.exports = {
  siteMetadata: {
    title: `David James`,
    subtitle: `Front End Developer`
  },
  plugins: [
    {
      // Pull wordpress content from API
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'wordpress.dfjames.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems
        verboseOutput: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    // },
    {
      // Does both SASS and Autoprefixing
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          require('autoprefixer')
        ],
        precision: 8 // SASS default: 5
      }
    },
  ]
}
