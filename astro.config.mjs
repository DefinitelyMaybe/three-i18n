import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import starlightLinksValidator from "starlight-links-validator";
import { createStarlightTypeDocPlugin } from "starlight-typedoc";

const [threeStarlightTypeDoc, _threeTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [addonsStarlightTypeDoc, _addonsTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();

// https://astro.build/config
export default defineConfig({
  markdown: {
    // plugins for making the headings into links
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: "three i18n",
      favicon: "/favicon_white.ico",
      social: {
        github: "https://github.com/DefinitelyMaybe/three-i18n",
      },
      customCss: ["./src/styles/main.css"],
      // locales: {
      //   root: {
      //     label: "English",
      //     lang: "en",
      //   },
      // ar: {
      //   label: "العربية",
      //   lang: "ar",
      //   dir: "rtl",
      // },
      // fr: {
      //   label: "français",
      //   lang: "fr",
      // },
      // it: {
      //   label: "italiano",
      //   lang: "it",
      // },
      // ja: {
      //   label: "日本語",
      //   lang: "ja",
      // },
      // ko: {
      //   label: "韓国人",
      //   lang: "ko",
      // },
      // "pt-br": {
      //   label: "Português",
      //   lang: "pt-BR",
      // },
      // ru: {
      //   label: "русский",
      //   lang: "ru",
      // },
      // zh: {
      //   label: "简体中文",
      //   lang: "zh-CN",
      // },
      // },
      plugins: [
        // starlightLinksValidator(),
        starlightSidebarTopicsDropdown([
          {
            label: "Fundamentals",
            link: "manual/getting-started/introduction/",
            items: [
              {
                label: "Getting Started",
                translations: {
                  ar: "البدء",
                  "zh-CN": "起步",
                  ko: "시작하기",
                  ja: "はじめてみましょう",
                  it: "Per iniziare",
                  "pt-BR": "Comece a usar",
                  fr: "Débuter",
                  ru: "Приступая к работе",
                },
                autogenerate: {
                  directory: "manual/getting-started/",
                },
              },
              {
                label: "Basics",
                translations: {
                  fr: "Bases",
                  ja: "基本",
                  ko: "Three.js란?",
                  ru: "Введение",
                  "zh-CN": "基本",
                },
                autogenerate: { directory: "manual/basics/" },
              },
              {
                label: "Fundamentals",
                translations: {
                  fr: "Principes de base",
                  ja: "基礎",
                  ko: "기본 구조",
                  ru: "Фунаментальные понятия",
                  "zh-CN": "基础",
                },
                autogenerate: { directory: "manual/fundamentals/" },
              },
              {
                label: "Solutions",
                translations: {
                  fr: "Solutions",
                  ja: "解決策",
                  ko: "활용하기",
                  ru: "Решения",
                  "zh-CN": "解决方案",
                },
                autogenerate: { directory: "manual/solutions/" },
              },
              {
                label: "Optimization",
                translations: {
                  fr: "Optimisation",
                  ja: "最適化",
                  ko: "최적화하기",
                  ru: "Оптимизация",
                  "zh-CN": "优化",
                },
                autogenerate: { directory: "manual/optimization/" },
              },
              {
                label: "WebXR",
                translations: {
                  fr: "WebXR",
                  ja: "WebXR",
                  ko: "웹VR",
                  ru: "WebXR",
                  "zh-CN": "WebXR",
                },
                autogenerate: { directory: "manual/webxr/" },
              },
              {
                label: "Reference",
                translations: {
                  fr: "Référence",
                  ja: "参照",
                  ko: "레퍼런스",
                  ru: "Ссылки",
                  "zh-CN": "参考",
                },
                autogenerate: { directory: "manual/reference/" },
              },
            ],
          },
          {
            label: "Reference",
            link: "reference/readme",
            items: [
              {
                label: "Reference",
                translations: {
                  fr: "Référence",
                  ja: "参照",
                  ko: "레퍼런스",
                  ru: "Ссылки",
                  "zh-CN": "参考",
                },
                autogenerate: { directory: "reference/" },
              },
            ],
          },
          {
            label: "Addons",
            link: "addons/readme",
            items: [
              {
                label: "Addons",
                autogenerate: { directory: "addons/" },
              },
            ],
          },
        ]),
        // Uncomment to generate JSDocs
        // threeStarlightTypeDoc({
        //   entryPoints: ["./three/src/Three.js", "./three/src/Three.WebGPU.js"],
        //   tsconfig: "./three/tsconfig.json",
        //   output: "reference",
        // }),
        // addonsStarlightTypeDoc({
        //   entryPoints: ["./three/addons/Addons.js"],
        //   tsconfig: "./three/tsconfig-addons.json",
        //   output: "addons",
        // }),
      ],
    }),
  ],
});
