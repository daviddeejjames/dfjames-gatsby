const autoprefixer = require('autoprefixer');
module.exports = {
  siteMetadata: {
    title: 'David James',
    subtitle: 'Front End Developer'
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'dfjames.press',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
        },
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        excludedRoutes: ['/*/*/comments', '/yoast/**'],
        normalizer: function ({ entities }) {
          return entities;
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'David James - Front End Developer',
        short_name: 'David James',
        start_url: '/',
        background_color: '#111111',
        theme_color: '#111111',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NDXSQ5N',
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: 'tomato',
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      // Does both SASS
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer({ browsers: ["> 1%", "last 2 versions"] })],
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    }
  ]
};

