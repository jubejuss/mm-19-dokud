(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{374:function(e,s,a){"use strict";a.r(s);var t=a(40),i=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kaesoleva-materjali-tegemise-logi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kaesoleva-materjali-tegemise-logi"}},[e._v("#")]),e._v(" Käesoleva materjali tegemise logi")]),e._v(" "),a("h2",{attrs:{id:"vuepressi-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepressi-install"}},[e._v("#")]),e._v(" Vuepressi install")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuepress.vuejs.org/guide/getting-started.html"),a("OutboundLink")],1),e._v(" panin püsti lihtsa skeleti."),a("br"),e._v("\nVuepress soovitab kasutada Yarni.")])]),e._v(" "),a("h2",{attrs:{id:"konfiguratsioonifaili-tegemine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#konfiguratsioonifaili-tegemine"}},[e._v("#")]),e._v(" Konfiguratsioonifaili tegemine")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Vuepressi "),a("code",[e._v("docs/.vuepress/config.js")]),e._v(" faili loomine.")])]),e._v(" "),a("h2",{attrs:{id:"esilehele-yaml-pais-ja-muud-osad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esilehele-yaml-pais-ja-muud-osad"}},[e._v("#")]),e._v(" Esilehele YAML päis ja muud osad")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Lisasin docs kausta README.md-sse YAML'i päiseosad – Hero ja features. Juhend leitav siit: "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuepress.vuejs.org/theme/default-theme-config.html"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"uldiste-piltide-lisamine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uldiste-piltide-lisamine"}},[e._v("#")]),e._v(" Üldiste piltide lisamine")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Lisasin pildi menüüribale "),a("code",[e._v("config.js")]),e._v(". seda tüüpi pildid lähevad .vuepress/public folderisse, kust süsteem need konverdib assetite kataloogi. Mingit rada ise näidata ei tohi. Määramine käib "),a("code",[e._v("themeConfig:")]),e._v(" kirjega.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" themeConfig: {\n     logo: 'cafe.png',\n },\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"peamenuu-ja-lingid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peamenuu-ja-lingid"}},[e._v("#")]),e._v(" Peamenüü ja lingid")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[e._v("Menüü aktiveerimine käib samuti"),a("code",[e._v("themeConfig:")]),e._v(" kirje alt. Lisasin menüüse lingid, ning tekitasin uue lehe. Uue lehe tegemiseks vaja lihtsalt docs foldrisse vastav md fail teha. "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links "),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" nav: [\n     { text: 'Kodu', link: '/' },\n     { text: 'Juhend', link: '/juhend/' },\n     { text: 'Git', link: 'https://github.com/jubejuss/vuepress-starter' }\n   ],\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("PÄRIS NII LIHTNE SEE SIISKI POLE!!!")]),e._v("  Eraldi lehed võiks hoida eraldi folderites. README.md on nagu HTML-is index, ehk, et see, mida vikimisi loetakse.")])])]),e._v(" "),a("h2",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[e._v("#")]),e._v(" Sidebar")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Sidebar – selleks tuleks teha folder, mille sisu seal kuvatakse. Antud juhul "),a("code",[e._v("juhend")]),e._v(". Selle sisse tehakse omakorda failid, mis tuleb config.js-is kirjutada sidebar'i alla. Antud juhul "),a("code",[e._v("README.md")]),e._v(" ja "),a("code",[e._v("hakkame-pihta.md")]),e._v(". Nende sees olevad pealkirjad ehk H-d korjab Vuepress ise kokku ja paneb küljeribale.")])]),e._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[e._v('Tarvis on määrata config.js failis korrektne "base". Antud näite puhul on selleks Github\'i aadressi lõpp '),a("code",[e._v("/vuepress-starter/")]),e._v(" (vaata üles aadressiribale). Seega config.js'i "),a("code",[e._v("base: '/vuepress-starter/'")]),e._v(". Seejärel on vaja kirjutada "),a("code",[e._v("deploy.sh")]),e._v(" fail, milles on kirjas kõik käsud, et saata valmis kompileeritud staatilised failid githubi.  "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuepress.vuejs.org/guide/deploy.html#github-pages"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" #!/usr/bin/env sh\n\n # katkestab kui on vead\n set -e\n\n # ehitab staatilised failid\n yarn run docs:build\n\n # liigub staatiliste failide folderisse\n cd docs/.vuepress/dist\n\n # Siin saaks oma domeeni alla saata\n # echo 'www.example.com' > CNAME\n \n # initsialiseerib giti ja kommitib\n git init\n git add -A\n git commit -m 'deploy'\n \n # kui kasutad sellist github pages skeemi, \n siis eemalda trellid ja asenda oma parameetritega \n https://<USERNAME>.github.io\n # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n \n # kui kasutad sellist github pages skeemi, \n siis eemalda trellid ja asenda oma parameetritega \n https://<USERNAME>.github.io/<REPO>\n # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n\n cd -\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"custom-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-css"}},[e._v("#")]),e._v(" Custom CSS")]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[a("p",[e._v("Klasside lisamiseks tuleb lisada YAML frontmatter sobivasse faili. nt Esilehe Hero muutmiseks peab lisama README.md-sse:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" ---\n pageClass: homepage\n ---\n")])])])])]),e._v(" "),a("p",[e._v("Seejärel on tarvis luua stiilifailid: "),a("code",[e._v(".vuepress/styles/index.styl")])])])}),[],!1,null,null,null);s.default=i.exports}}]);