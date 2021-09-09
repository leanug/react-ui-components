module.exports = {
  siteMetadata: {
    title: `UI React components`,
    description: `A bunch of UI React components like accordions, pricing tables and more.`,
    author: `Leandro Ubilla Gonzalez`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["400", "500", "600", "700"],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
            {
              family: "Open Sans",
              variants: ["400", "500", "600", "700"],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
          ],
        },
        useMinify: true,
        usePreload: false,
        usePreconnect: false,
      },
    },
  ],
};
