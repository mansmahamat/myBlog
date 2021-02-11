module.exports = {
  siteMetadata: {
    title: `Be water`,
    name: `Narative`,
    siteUrl: `https://mahamat-salle-mansour-blog.netlify.app/`,
    description: `Mansour Mahamat-Salle's blog, web developer`,
    hero: {
      heading: `Mansour Mahamat-Salle's blog 🚀🌍`,
      maxWidth: 752,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mans____m`,
      },
      {
        name: `github`,
        url: `https://github.com/mansmahamat?tab=repositories`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mansour-mahamat-salle-138b73138/`,
      },
      {
        name: `devto`,
        url: `https://mansour-mahamat.netlify.app/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-Y496F1DRS1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/drop.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
