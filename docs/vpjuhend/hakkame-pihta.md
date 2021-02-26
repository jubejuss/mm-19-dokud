# Käesoleva materjali tegemise logi

## Vuepressi install

1. [https://vuepress.vuejs.org/guide/getting-started.html](https://vuepress.vuejs.org/guide/getting-started.html) panin püsti lihtsa skeleti.  
   Vuepress soovitab kasutada Yarni.

## Konfiguratsioonifaili tegemine

2.  Vuepressi `docs/.vuepress/config.js` faili loomine.

## Esilehele YAML päis ja muud osad

3. Lisasin docs kausta README.md-sse YAML'i päiseosad – Hero ja features. Juhend leitav siit: [https://vuepress.vuejs.org/theme/default-theme-config.html](https://vuepress.vuejs.org/guide/getting-started.html)

## Üldiste piltide lisamine

4.  Lisasin pildi menüüribale `config.js`. seda tüüpi pildid lähevad .vuepress/public folderisse, kust süsteem need konverdib assetite kataloogi. Mingit rada ise näidata ei tohi. Määramine käib `themeConfig:` kirjega.

        themeConfig: {
            logo: 'cafe.png',
        },

## Peamenüü ja lingid

5.  Menüü aktiveerimine käib samuti`themeConfig:` kirje alt. Lisasin menüüse lingid, ning tekitasin uue lehe. Uue lehe tegemiseks vaja lihtsalt docs foldrisse vastav md fail teha. [https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links ](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links)

         nav: [
        { text: 'Kodu', link: '/' },
        { text: 'Juhend', link: '/juhend/' },
        { text: 'Git', link: 'https://github.com/jubejuss/vuepress-starter' }
        ],

1.  **PÄRIS NII LIHTNE SEE SIISKI POLE!!!** Eraldi lehed võiks hoida eraldi folderites. README.md on nagu HTML-is index, ehk, et see, mida vikimisi loetakse.

## Sidebar

7.  Sidebar – selleks tuleks teha folder, mille sisu seal kuvatakse. Antud juhul `juhend`. Selle sisse tehakse omakorda failid, mis tuleb config.js-is kirjutada sidebar'i alla. Antud juhul `README.md` ja `hakkame-pihta.md`. Nende sees olevad pealkirjad ehk H-d korjab Vuepress ise kokku ja paneb küljeribale. Kui erinevaid MD-faile vaja pole, saab organiseerida ka nõnda, et Vuepress korjab ise pealkirjad README-st kokku. Allolevas näites on mõlemad versioonid:

         sidebar: {
            "/vpjuhend/": [
            "",
            "hakkame-pihta"
            ],
            "/nuxtjuhend/": "auto", /_ automaatselt genereeritavad pealkirjad
            README.md failist _/
        }

## Deployment

1.  Tarvis on määrata config.js failis korrektne "base". Antud näite puhul on selleks Github'i aadressi lõpp `/vuepress-starter/` (vaata üles aadressiribale). Seega config.js'i `base: '/vuepress-starter/'`. Seejärel on vaja kirjutada `deploy.sh` fail, milles on kirjas kõik käsud, et saata valmis kompileeritud staatilised failid githubi. [https://vuepress.vuejs.org/guide/deploy.html#github-pages](https://vuepress.vuejs.org/guide/deploy.html#github-pages)  
    Vuepressi lehel on antud juhis, mis väga hästi ei tööta. Otsisin Githubi lehelt välja, mis folderis ja kuidas peaks githubi leht olema ettevalmistatud ja määrasin `config.js`failis, et tehtagu juurkataloogi valmis leht, ehk selliselt: `dest: 'gh-pages'`. See ütleb, et destination on `gh-pages`.

    #!/usr/bin/env sh

            # katkestab kui on vead
            set -e

            # ehitab staatilised failid
            yarn run docs:build

            # liigub staatiliste failide folderisse
            # cd docs/.vuepress/dist (see oli Vuepresi juhendis)
            cd gh-pages

            # Siin saaks oma domeeni alla saata
            # echo 'www.example.com' > CNAME

            # initsialiseerib giti ja kommitib
            git init
            git add -A
            git commit -m 'deploy'

            # kui kasutad sellist github pages skeemi,
            siis eemalda trellid ja asenda oma parameetritega
            https://<USERNAME>.github.io
            # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

            # kui kasutad sellist github pages skeemi,
            siis eemalda trellid ja asenda oma parameetritega
            https://<USERNAME>.github.io/<REPO>
            # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

            cd -

    Lisasin `gh-pages`-i ka `.gitignoresse`, et selle sisu tavalise gitisynkiga üles ei lükataks.  
    Käsklus seele sh faili käivitamiseks on: `sh 'deploy.sh'` ehk siis sh ja rada failini. Muudatus võtab githubis aega ca minuti.

## Custom CSS

9. Klasside lisamiseks tuleb lisada YAML frontmatter sobivasse faili. Frontmatter on lehe-spetsiifilinbe metadata faili alguses. nt Esilehe Hero muutmiseks peab lisama README.md-sse:
   ***
   ## pageClass: homepage
   Seejärel on tarvis luua stiilifailid: `.vuepress/styles/index.styl`. Aga selle päisesse lisamisega esines mingeid tõrkeid, lüpuks, lisades ta kõige esimeseks, sain käima. Võibolla juhus.  
   Igatahes, kui asi õnnestub, saab stiilida asja.

## Custom layout

10. Et muuta kujundust/layouti, peab looma .vuepress kataloogi theme kataloogi ja sinna sisse panema `*.vue` templiidid. Kui mõnda neist kasutada, peab vastava lehe frontmaterisse kirjutama `layout: layoutinimi`
