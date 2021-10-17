module.exports = {
  pathPrefix: "/church/public",
  siteMetadata: {
    siteUrl: "https://www.flamingochurch.org",
    title: "Church of the Sacred Rose-Colored Flame",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: "Flamingo Church",
        short_name: `Church`,
        start_url: `/`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://flamingochurch.us5.list-manage.com/subscribe/post?u=6ebe0b4af973c20b095e1eb03&amp;id=f896297f9e",
        timeout: 3500,
      },
    },
  ],
};
