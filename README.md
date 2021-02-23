# Vuepressi juhend
[Vuepressi koduleht](https://vuepress.vuejs.org)  

## Installeerimise juhend
**NB! Kasuta Yarni!**  
`git clone`  
`cd loodud folderisse`  
`yarn install`  

## Käesoleva materjali tegemise logi
1. Vuepressi install https://vuepress.vuejs.org/guide/getting-started.html paneb püsti lihtsa skeleti.
2.  Vuepressi `docs/.vuepress/config.js` faili loomine
3. Lisatud Vuepressi README YAML'i päiseosad – Hero ja features: https://vuepress.vuejs.org/theme/default-theme-config.html
4. Lisasin pildi menüüribale `config.js`. seda tüüpi pildid lähevad .vuepress/public folderisse, kust süsteem need konverdib assetite kataloogi. Mingit rada ise näidata ei tohi.

        themeConfig: {
            logo: 'cafe.png',
        },
5. Lisasin menüüse lingid, ning tekitasin uue lehe. Uue lehe tegemiseks vaja lihtsalt docs foldrisse vastav md fail teha. https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links  
        
        nav: [
            { text: 'Kodu', link: '/' },
            { text: 'Juhend', link: '/juhend/' },
            { text: 'Git', link: 'https://github.com/jubejuss/vuepress-starter' }
          ],
6. PÄRIS NII LIHTNE SEE SIISKI POLE!!!  Eraldi lehed võiks hoida eraldi folderites. README.md on nagu HTML-is index, ehj, et see, mida vikimisi loetakse.
7. Sidebar – selleks tuleks teha folder, mille sisu seal kuvatakse. Antud juhul `juhend`. Selle sisse tehakse omakorda failid, mis tuleb config.js-is kirjutada sidebar'i alla. Antud juhul `README.md` ja `hakkame-pihta.md`. Nende sees olevad pealkirjad ehk H-d korjab Vuepress ise kokku ja paneb küljeribale.