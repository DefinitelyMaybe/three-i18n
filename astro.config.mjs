import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ar: {
          label: "العربية",
          lang: "ar",
          dir: "rtl",
        },
        fr: {
          label: "français",
          lang: "fr",
        },
        it: {
          label: "italiano",
          lang: "it",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
        ko: {
          label: "韓国人",
          lang: "ko",
        },
        "pt-br": {
          label: "Português",
          lang: "pt-BR",
        },
        ru: {
          label: "русский",
          lang: "ru",
        },
        zh: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      plugins: [
        // starlightLinksValidator(),
        starlightSidebarTopicsDropdown([
          {
            label: "Fundamentals",
            link: "manual/basics/fundamentals/",
            items: [
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
                label: "Tips",
                translations: {
                  fr: "Conseils",
                  ja: "Tips",
                  ko: "팁",
                  ru: "Советы",
                  "zh-CN": "技巧",
                },
                autogenerate: { directory: "manual/tips/" },
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
            label: "Manual",
            link: "manual/introduction/getting-started/creating-a-scene/",
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
                  directory: "manual/introduction/getting-started/",
                },
              },
              {
                label: "Next Steps",
                translations: {
                  ar: "الخطوات التالية",
                  ja: "次の段階",
                  "zh-CN": "进阶",
                  ko: "심화 과정",
                  it: "Prossimi passi",
                  "pt-BR": "Próximos Passos",
                  fr: "Étapes Suivantes",
                  ru: "Next Steps",
                },
                autogenerate: {
                  directory: "manual/introduction/next-steps/",
                },
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
