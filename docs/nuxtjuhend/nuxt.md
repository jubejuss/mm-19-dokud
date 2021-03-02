# Nuxti juhend

[Video](https://www.youtube.com/watch?v=Wdmi4k7sFzU), mille järgi on siinne juhend koostatud ja [see leht](see link tekib alles siis kui leht valmis) tehtud

## Hakkame pihta

Esiteks installime Nuxt'i.
`npx create-nuxt-app <äpi nimi>`
Antud juhul on valitud
`Javascript`  
`Npm`  
`Bootstrap Vue`  
`Axios`  
`Eslint`  
`Jest`  
`Universal (SSR / SSG)`  
`Server (Node.js hosting)` Siin peaks veidi nende vahet uurima  
 `none`  
`Git`

## Arendus

```powershell
cd <äpi nimi>
npm run dev
```

## Komponendid

Nuxt, tegelikult siis vue, üheks oluliseks osaks on komponendid.  
Nt teeme sellise veebilehe:
![Wireframe](/01-wireframe.jpg)
Näidatud osad on kõik komponendid, komponente saame me taaskasutada.  
Nt vaikimisi on Nuxti installis logo komponent.

Pages folder on see, kus asuvad lehed, millele me omakorda saame komponente välja kutsuda. Seega on meil `pages` folder, kus on `index.vue` mida meile kuvataksegi kodulehel.

Algatuseks kustutame `index.vue`-s kogu ebavajaliku sodi, ehk `class="container"` sisu.  
Seejärel või ka enne või ükskõik millal liigume `components` folderisse, kustutame sealse sisu, kuna meil ei ole seda vaja ja loome oma esimese komponendi, nt Hero komponendi (vt wireframe'i).  
Et teada, mida kirjutada, on meil VSCode's abiks paar pluginat: `Vue VSCode Snippets` ja `Vue`.  
Kui neist esimene installitud, võime kirjutada `vbase` ja vajutades enter, lisatakse komponendi templiit.  
NB! Kui meil pole `SCSS`installitud, siis võib alt reast kustutada `lang="scss"`
Siinse näite puhul kirjutame `Hero.vue` komponenti meelepärased osad. Nt `h1` ja kirjelduse ning omakorda jaluses osas stiilime nad ära.
Jauses asuva `<style scoped>` scoped tähendab, et stiil mõjub vaid selles komponendis olevatele klassidele.

```html
<template>
  <div class="klassinimi1">
    <h1 class="klassinimi2">Pealkiri</h1>
    <p class="klassinimi3">Sisutekst</p>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .klassinimi1 {
  }
  .klassinimi2 {
  }
  .klassinimi3 {
  }
</style>
```

ja selles etapis võib index.vue olla lihtsalt selline:

```html
<template>
  <div class="container">
    <Hero />
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
```

Komponendi animeerimiseks selline klass:

```css
.comp-anim {
  animation: 1s appear;
  margin: auto;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
```

## Assetid

Faile, mis on veel kompileerimata, hoitakse juurkataloogi assetite kataloogis. Seal hoiame ka pilte. Nii, et kui mingit pilti vaja lisada, tuleks see panna assetite kataloogi alamkataloogi ja viidata nii: `assets/svg/svgpilt.svg`  
Kuid samasse kataloogi pistetakse ka kompileerimata javascript, SASS jms failid.
