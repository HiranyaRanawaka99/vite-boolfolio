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

        pagination: {
          next: null,
          prev: null,
        }
    }  
  },

  methods: {
    fetchProjects(uri = this.api.baseUrl + 'projects') {
        axios
        .get(uri)
        .then((response) => {
            this.projects = response.data.data;

            this.pagination.prev = response.data.prev_page_url;
            this.pagination.next = response.data.next_page_url;
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

<div class="next-prev-buttons m-5  d-flex justify-content-between">
  <button class="btn btn-primary" @click="fetchProjects(pagination.prev)">Previous page</button>
  <button class="btn btn-primary" @click="fetchProjects(pagination.next)">Next page</button>
</div>

</template>



<style lang="scss">

</style>