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
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'swissmetaldetecting-production',
        objectTypes: ['articles','authors'],
        apiAccess: {
          read_key: 'LtDLrcwY3i0DL5lefO19aB6oU8Qu2bqfWhWQdHCu5MPCCAD4Nr',
          write_key: 'VfcAQoaxRj0SW17u46zoOWPG2oXMDKVrzYFusurRo6RHEQ4YXi',
        }
      }
    },
  ],
};
