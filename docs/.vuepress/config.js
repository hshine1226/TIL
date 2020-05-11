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
        title: "Python",
        children: CONST.PythonList,
      },
    ],
  },
};
