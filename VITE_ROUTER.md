# VITE

1. Nel terminale creare file
---
2. pulire app.vue
---
3. Installare sass - npm install -D sass-loader sass
---
4. Installare bootstrap . npm i bootstrap
 - importare bootstrap e scss all'interno del file main.js

 ```js
 import './assets/scss/style.scss'
 import * as bootstrap from 'bootstrap'

 ```
---

5. Installare axios 

```
npm i axios
```

6. Richiamo i miei progetti che ho creato con laravel attraverso una chiamata axios 

```js
import axios from 'axios';
import ProjectList from './components/ProjectList.vue';

export default {
  data() {
    return {
        projects: [],

        api: {
            baseUrl : 'http://127.0.0.1:8000/api/',
        },
    }  
  },

  methods: {
    fetchProjects(uri = this.api.baseUrl + 'projects') {
        axios
        .get(uri)
        .then((response) => {
            this.projects = response.data.data;
        })
    },
  },

    created() {
        this.fetchProjects();
    },

  components: {ProjectList},

}

```
7. Tramite props mando da App a ProjectList la mia lista dei progetti

```js
<ProjectList :pincopallino="projects"></ProjectList>

---

 props:{
      pincopallino: Array,
  } 

```

# Vue Router

1. Comando 
```
 npm install vue-router@4 per installare
```

2. Creo cartella src/router/index.js dove mi importo il router


```js
import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    //Aggiugno history
    history: createWebHistory(),

    //Aggiungo Rotte
    routes: [],
});


export { router };

```

3. Creo lo scaffolding e le pagine necessario per navigare
- HomePage, PortfolioPage, ProjectDetailPage

4. Su src/router/index.js importo le rotte 

```js
import Homepage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';

const router = createRouter({
    //Aggiugno history
    history: createWebHistory(),

    //Aggiungo Rotte
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: Homepage,
        },
        {
            name: 'blogpage',
            path: '/blog',
            component: BlogPage,
        }
    ],

});


export { router };

```
---
5. Su src/main.js mi importo il router 

```js
//import router 
import { router } from './router/index';

const app = createApp(App);
app.component();
app.use(router);
app.mount('#app');

```
---

6. Per la navigazione usare 

- Per visualizzare nella pagina:
```html
 <router-view> </router-view>
```

- Link per naviagare:
```html 
 <router-link class="nav-link active" aria-current="page" :to="{ name: 'portfoliopage'}"> Portfolio </router-link>
```

- Per passare parametri parametri

```js
  {
    name: 'projectdetailpage',
    path: '/detail/:id',
    component: ProjectDetailPage,
    }
```

```html 
 <router-link :to ="{ name: 'projectdetailpage', params: {id: project.id}}"> <button class="btn btn-primary"> Vedi </button> </router-link>
```
- Stampo nella pagina di dettaglio il progetto con l'id sul quale clicco

```js
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
import {store} from '../data/store';

export default {
    data() {
        return {
            title: 'Dettagli progetto',

            project: {},
        }
    },

    created() {
        axios
        .get(store.api.baseUrl + 'projects/' + this.$route.params.id)
        .then((response) => {
            this.project = response.data;
        })

    },
    components: {ProjectCard},
}

</script>


<template>
<h1> {{ title  }}</h1>
<ProjectCard 
:project="project"
v-if="project"></ProjectCard>

</template>

```
---
10. ##### Per portare un un'immagine:

- Su Laravel - Project model facciamo una funzinoe

```php
 public function getAbsUriImage() {
        return $this->cover_image ? Storage::url($this->cover_image) : null;
    }
```
    - $this->cover_image è il path 
        - lo trasformiamo in un url assoluto 

11. Nella funzione index e show passo il metodo soprascritto

```php
 $project->cover_image = $project->getAbsUriImage();

 ```

