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
  plugins: ["@vuepress/back-to-top"][
    ("@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true,
    })
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
        title: "Markdown",
        children: CONST.Markdown,
      },
      {
        title: "Terminal",
        children: CONST.Terminal,
      },
      {
        title: "Python",
        children: CONST.PythonList,
      },
      {
        title: "Vuepress",
        children: CONST.VuepressList,
      },
      {
        title: "HTML",
        children: CONST.Html,
      },
      {
        title: "Flask",
        children: CONST.Flask,
      },
      {
        title: "Google Cloud",
        children: CONST.Googlecloud,
      },
      {
        title: "Alternatives",
        children: CONST.Alternatives,
      },
      {
        title: "Data structure & Algorithm",
        children: CONST.Datastructure_Algorithm,
      },
      {
        title: "Node.js",
        children: CONST.NodeJs,
      },
      {
        title: "Express.js",
        children: CONST.Express,
      },
      {
        title: "English Conversation",
        children: CONST.EnglishConversation,
      },
    ],
  },
};
