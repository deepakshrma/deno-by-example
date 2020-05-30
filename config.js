module.exports = {
  plugins: [
    "@docusaurus/plugin-google-analytics",
    "@docusaurus/plugin-sitemap",
  ],
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap",
      type: "text/css",
    },
  ],
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      defaultLanguage: "ts",
    },
    googleAnalytics: {
      trackingID: "",
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Medium.com",
              href: "https://medium.com/@deepak_v",
            },
            {
              label: "Discord",
              href: "https://discord.com/channels/@deepakv",
            },
            {
              label: "Linkdin",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/deepakshrma/deepakshrma.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma, Inc. Built with Docusaurus.`,
    },
  },
  themes: ["@docusaurus/theme-classic"],
};
