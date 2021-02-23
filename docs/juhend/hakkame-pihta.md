# Käesoleva materjali tegemise logi
## Vuepressi install
1. [https://vuepress.vuejs.org/guide/getting-started.html](https://vuepress.vuejs.org/guide/getting-started.html) panin püsti lihtsa skeleti.  
Vuepress soovitab kasutada Yarni.  
## Konfiguratsioonifaili tegemine
2.  Vuepressi `docs/.vuepress/config.js` faili loomine.  

## Esilehele YAML päis ja muud osad
3. Lisasin docs kausta README.md-sse YAML'i päiseosad – Hero ja features. Juhend leitav siit: [https://vuepress.vuejs.org/theme/default-theme-config.html](https://vuepress.vuejs.org/guide/getting-started.html)  
## Üldiste piltide lisamine
4. Lisasin pildi menüüribale `config.js`. seda tüüpi pildid lähevad .vuepress/public folderisse, kust süsteem need konverdib assetite kataloogi. Mingit rada ise näidata ei tohi. Määramine käib `themeConfig:` kirjega.

        themeConfig: {
            logo: 'cafe.png',
        },
## Peamenüü ja lingid
5. Menüü aktiveerimine käib samuti`themeConfig:` kirje alt. Lisasin menüüse lingid, ning tekitasin uue lehe. Uue lehe tegemiseks vaja lihtsalt docs foldrisse vastav md fail teha. [https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links ](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links ) 
        
        nav: [
            { text: 'Kodu', link: '/' },
            { text: 'Juhend', link: '/juhend/' },
            { text: 'Git', link: 'https://github.com/jubejuss/vuepress-starter' }
          ],
6. **PÄRIS NII LIHTNE SEE SIISKI POLE!!!**  Eraldi lehed võiks hoida eraldi folderites. README.md on nagu HTML-is index, ehk, et see, mida vikimisi loetakse.
## Sidebar
7. Sidebar – selleks tuleks teha folder, mille sisu seal kuvatakse. Antud juhul `juhend`. Selle sisse tehakse omakorda failid, mis tuleb config.js-is kirjutada sidebar'i alla. Antud juhul `README.md` ja `hakkame-pihta.md`. Nende sees olevad pealkirjad ehk H-d korjab Vuepress ise kokku ja paneb küljeribale.