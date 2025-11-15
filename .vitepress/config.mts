import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import markdownItVideo from "@vrcd-community/markdown-it-video";

import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

// 访问 RSS 资源的 URL
const baseUrl = 'https://blog.guange.top'
const rssFilename = 'feed.rss'
const RSS: RSSOptions = {
  title: "guan管哥的小窝-RSS",
  baseUrl,
  copyright: 'Copyright (c) 2025 guan管哥',
  filename: rssFilename
}

export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
  socialLinks: { icon: string; url: string }[]

  //spine
  spineVoiceLang: 'zh' | 'jp'

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
   sitemap: {
     hostname: 'https://blog.guange.top',
   },
  title: "guan管哥的小窝",
  description: "guan管哥的博客",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false,
    name: "阿罗娜的草莓牛奶",
    welcomeText: '欢迎回来',
    motto: ['只要相信泳装就是内衣，那泳装就是内衣', '像你这样的大人，我们最讨厌了','vanitas vanitatum et omnia vanitas','摸摸我','魔法是存在的','我重要的......爱丽丝','你们对我最重要的公主殿下做了什么！','和你的日常，就是奇迹'],
    socialLinks: [
      { icon: 'github', url: 'https://github.com/Guan128910-wq' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/3546554482821428' },
      { icon: 'continue', url: `${baseUrl}/${rssFilename}` },
    ],

    //spine语音配置，可选zh/jp
    spineVoiceLang: 'jp',

    //footer配置
    footerName: 'Sensei',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'Github Pages', url: 'https://docs.github.com/zh/pages' },
    ],

    //gitalk配置
    clientID: 'Ov23liIEXdb4wDBnRyTB',
    clientSecret: '32976ec4da3e5684d9b9ba4c4acbbb71a12f4c3d',
    repo: 'blog-comments',
    owner: 'Guan128910-wq',
    admin: ['Guan128910-wq'],
  },
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
        md.use(markdownItVideo, {
      });
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': 'gallery',
      })
    },
  },
  vite: {
    plugins: [RssPlugin(RSS)]
  }
})
