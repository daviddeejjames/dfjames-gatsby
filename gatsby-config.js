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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "David James - Front End Developer",
        short_name: "David James",
        start_url: "/",
        background_color: "#111111",
        theme_color: "#111111",
        display: "minimal-ui",
        icons: [
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-91072742-1',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`
  ]
}
