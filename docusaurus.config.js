module.exports = {
  title: "Deno By Example",
  tagline: "Tutorial: Learn Web Programming in Deno by Examples",
  url: "https://decipher.dev",
  baseUrl: "/deno-by-example/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deno-by-example", // Usually your repo name.
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap",
      type: "text/css",
    },
  ],
  themeConfig: {
    sidebarCollapsible: false,
    googleAnalytics: {
      trackingID: "UA-172955705-1",
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Deno By Example",
        src: "https://deno.land/logo.svg",
        href: "https://decipher.dev/",
        target: "_self",
      },
      items: [
        {
          to: "/",
          label: "Deno By Example",
          position: "left",
        },
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
    footer: {
      style: "dark",
      links: [
        {
          title: "Follow me",
          items: [
            {
              label: "Linkdin",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
            {
              label: "Medium.com",
              href: "https://deepak-v.medium.com/",
            },
            {
              label: "Discord",
              href: "https://discord.com/channels/@deepakv",
            },
          ],
        },
        {
          title: "Friend with me",
          items: [
            { label: "Twitter", href: "https://twitter.com/nalayakshrma" },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nalayaksharma_poetry/",
            },
            {
              label: "Unsplash",
              href: "https://unsplash.com/@deepak_v",
            },
          ],
        },
        {
          title: "Contact me",
          items: [
            // {
            //   label: "Email me",
            //   href: "mailto:contact-me@decipher.dev?subject=Say Hi!&body=Hi,\n",
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          // homePageId: "doc1",
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
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
