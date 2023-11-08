<script>
import axios from 'axios';
import ProjectList from './components/ProjectList.vue';

export default {
  data() {
    return {
        projects: [],

        api: {
            baseUrl :'http://127.0.0.1:8000/api/',
        },
    }  
  },

  methods: {
    fetchProjects(uri = this.api.baseUrl + 'projects') {
        axios
        .get(uri)
        .then((response) => {
            this.projects = response.data.data;
        });
    },
  },

    created() {
        this.fetchProjects();
    },

  components: {ProjectList},

}

</script>


<template>

<h1>  Progetti </h1>
<hr>
<ProjectList :projects="projects"></ProjectList>

</template>



<style lang="scss">

</style>