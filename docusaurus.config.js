// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
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
      href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap",
      type: "text/css",
    },
  ],
  scripts: [],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Deno By Example",
        src: "/img/logo.svg",
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

    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        gtag: {
          trackingID: "G-VX1V9NRMDC",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/deepakshrma/deno-by-example/edit/master",
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/deepakshrma/deno-by-example/edit/master/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
};

export default config;
