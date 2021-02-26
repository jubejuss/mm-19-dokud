module.exports = {
    title: 'VuePress',
    description: 'Vuepressi test õppeeesmärgil',
    base: '/vuepress-starter/',
    dest: 'gh-pages',
    themeConfig: {
      logo: '/logo.png',
      smoothScroll: true,
      nav: [
        { text: 'Kodu', link: '/' },
        { text: "VuePress", link: "/vpjuhend/" },
        { text: "Nuxt", link: "/nuxtjuhend/" },
        { text: 'Git', link: 'https://github.com/jubejuss/vuepress-starter' },
      ],
      sidebar: {
        "/vpjuhend/": [
          "",
          "hakkame-pihta"
        ],
        "/nuxtjuhend/": "auto", /* automaatselt genereeritavad pealkirjad README.md failist */
      }
    }
  }


  
  
  