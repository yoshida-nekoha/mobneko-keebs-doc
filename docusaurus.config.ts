import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "モブ猫ショップ",
  tagline: "モブ猫ショップの製品情報やビルドガイド",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"],

  // Set the production url of your site here
  url: "https://yoshida-nekoha.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/mobneko-keebs-doc/",
  // baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yoshida-nekoha", // Usually your GitHub org/user name.
  projectName: "mobneko-keebs-doc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/yoshida-nekoha/mobneko-keebs-doc/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/yoshida-nekoha/mobneko-keebs-doc/edit/main/blog/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-621WHK00TV",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "モブ猫ショップ",
      // logo: {
      //   alt: "モブ猫ショップ",
      //   src: "/img/shop-logo.jpg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "ビルドガイド",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/yoshida-nekoha/mobneko-keebs-doc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Shop",
          items: [
            {
              label: "モブ猫ショップ",
              href: "https://mobneko-shop.booth.pm",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            {
              label: "X (Twitter)",
              href: "https://x.com/mobnekoha",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/yoshida-nekoha/mobneko-keebs-doc",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MOBNEKO SHOP | Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
