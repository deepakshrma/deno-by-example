const configs = require("./config");
module.exports = {
  title: "Deno By Example",
  tagline: "Deno By Example",
  url: "https://deepakshrma.github.io/",
  baseUrl: "/deno-by-example/",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deno-by-example", // Usually your repo name.
  ...configs,
  themeConfig: {
    ...configs.themeConfig,
    sidebarCollapsible: false,
    googleAnalytics: {
      trackingID: "UA-69472059-2",
    },
    navbar: {
      hideOnScroll: true,
      title: "Deno By Example",
      logo: {
        alt: "Deno By Exampl",
        src: "https://deno.land/logo.svg",
      },
      links: [
        {
          to: "getting-started",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/deepakshrma/deno-by-example",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Set this value to '/'.
          path: "website",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/deepakshrma/deno-by-example/edit/master",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/deepakshrma/deno-by-example/edit/master/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          url: 'https://example.com',
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
