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
        title: "Github[깃허브]",
        children: CONST.Github,
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
        children: CONST.CSS,
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
        title: "TypeScript[타입스크립트]",
        children: CONST.TypeScript,
      },
      {
        title: "React[리액트]",
        children: CONST.React,
      },
      {
        title: "Redux[리덕스]",
        children: CONST.Redux,
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
        title: "MongoDB",
        children: CONST.MongoDB,
      },
      {
        title: "Google Cloud",
        children: CONST.Googlecloud,
      },
      {
        title: "AWS",
        children: CONST.AWS,
      },
      {
        title: "Network",
        children: CONST.Network,
      },
      { title: "Heroku[헤로쿠]", children: CONST.Heroku },
      { title: "Netlify", children: CONST.Netlify },
      {
        title: "Interview[면접]",
        children: CONST.Interview,
      },
      {
        title: "English Conversation[영어회화]",
        children: CONST.EnglishConversation,
      },
      {
        title: "Docker[도커]",
        children: CONST.Docker,
      },
      {
        title: "Colab[코랩]",
        children: CONST.Colab,
      },
      {
        title: "Postgresql",
        children: CONST.Posgresql,
      },
    ],
  },
};
