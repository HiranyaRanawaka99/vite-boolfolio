<script>

import axios from 'axios';
import {store} from '../../data/store'

import ProjectCard from './ProjectCard.vue';
import PaginationUi from '../ui/PaginationUi.vue';


export default {
  data() {
    return {
        projects: [],

        pagination: [],
     };
   },

    methods: {
        fetchProjects(uri = null) {
           if(!uri) {
            uri = store.api.baseUrl + 'projects';
            }

            axios
            .get(uri)
            .then((response) => {
                this.projects = response.data.data;
                this.pagination = response.data.links;
            });
        },
    },
    
    created() {
        this.fetchProjects();
    },

    components: { ProjectCard, PaginationUi },
}

</script>


<template>

<div class="container">
    <h1>  Lista progetti </h1>

  <PaginationUi
  :pagination="pagination"
  @change-page="fetchProjects"
  ></PaginationUi>

    <div 
    class="row row-cols-3 g-4">
        <div class="col" v-for="project in projects">
            <ProjectCard 
            :isDetail="false"
            :project = "project"  
            > 
        </ProjectCard>
        </div>
    </div>
</div>


</template>



<style lang="scss">

</style>