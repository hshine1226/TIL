// docs/.vuepress/config.js
let CONST = require("./const");

module.exports = {
  title: "Today Junhyuk Learned",
  description: "Junhyuk's Personal Wiki (Today I Learned)",
  base: "/TIL/",
  dest: "build",

  head: [
    ["link", { rel: "icon", href: `/images/logo-144.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],

  plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/pwa"],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/hshine1226/",
      },
      {
        text: "Blog",
        link: "https://medium.com/@hshine1226/",
      },
    ],
    sidebar: [
      {
        title: "Data structure[자료구조]",
        children: CONST.DataStructure,
      },
      {
        title: "Algorithm[알고리즘]",
        children: CONST.Algorithm,
      },
      {
        title: "Markdown[마크다운]",
        children: CONST.Markdown,
      },
      {
        title: "Terminal[터미널]",
        children: CONST.Terminal,
      },
      {
        title: "Alternatives",
        children: CONST.Alternatives,
      },
      {
        title: "HTML",
        children: CONST.Html,
      },
      {
        title: "CSS",
        children: CONST.Css,
      },
      {
        title: "Vuepress[뷰프레스]",
        children: CONST.VuepressList,
      },
      {
        title: "Python[파이썬]",
        children: CONST.PythonList,
      },
      {
        title: "JavaScript[자바스크립트]",
        children: CONST.JavaScript,
      },
      {
        title: "Flask[플라스크]",
        children: CONST.Flask,
      },
      {
        title: "Node.js",
        children: CONST.NodeJs,
      },
      {
        title: "Babel",
        children: CONST.Babel,
      },
      {
        title: "Express",
        children: CONST.Express,
      },
      {
        title: "Google Cloud",
        children: CONST.Googlecloud,
      },
      {
        title: "English Conversation[영어회화]",
        children: CONST.EnglishConversation,
      },
    ],
  },
};
