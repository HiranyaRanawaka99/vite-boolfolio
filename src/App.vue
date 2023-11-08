<script>
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

</script>


<template>

<h1>  Progetti </h1>
<hr>
<ProjectList></ProjectList>

</template>



<style lang="scss">

</style>