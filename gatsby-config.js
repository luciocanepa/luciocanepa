module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "luciocanepa",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-2WV0PQ76KQ",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: "luciocanepa-portfolio",
        objectTypes: ["works", "partners"],
        apiAccess: {
          read_key: "qEM2JHgxYHTtic1jzWW2XPevWjyMEzaH1ucn948TK3rcX6dvAn",
          write_key: "ew2k24UZTMe9xQMKVhCPcnV6WsBZLEGw7wueLe0lRCAbwBDTnk",
        },
      },
    },
  ],
};
