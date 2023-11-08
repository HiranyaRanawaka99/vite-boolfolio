1. Nel terminale creare file
---
2. pulire app vue
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
    return {}  
  },

  created() {
    axios
    .get('http://127.0.0.1:8000/api/projects')
    .then((response) => {
      const projects = response.data.data;
    })
   
    ;
  },
  components: {ProjectList},
}
```