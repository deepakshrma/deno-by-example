module.exports = {
  title: "Deno By Example",
  tagline: "Deno By Example",
  url: "https://github.com/deepakshrma",
  baseUrl: "/deno-by-example/",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deno-by-example", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      // theme: require("prism-react-renderer/themes/github"),
      // darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "ts",
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    navbar: {
      hideOnScroll: true,
      
      title: "Deno By Example",
      logo: {
        alt: "Deno By Exampl",
        src: "https://deno.land/logo.svg",
      },
      links: [
        {
          to: "01_hello_world",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/deepakshrma/deno-by-example",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/doc1',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          // homePageId: '01_hello_world', // Set to existing document id.
          path: "website",
          // routeBasePath: 'website',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/deepakshrma/deno-by-example/edit/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/deepakshrma/deno-by-example/edit/master/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
