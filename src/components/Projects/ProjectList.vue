<script>

import axios from 'axios';
import {store} from '../../data/store'

import ProjectCard from './ProjectCard.vue';
import PaginationUi from '../ui/PaginationUi.vue';


export default {
  data() {
    return {
        projects: [],
        pagination: {
          next: null,
          prev: null,
          //array di tutti i link a cui posso andare
          links: null,
        }

    };
  },

    methods: {
        fetchProjects(uri = store.api.baseUrl + 'projects') {
            axios
            .get(uri)
            .then((response) => {
                this.projects = response.data.data;

                  
                this.pagination.prev = response.data.prev_page_url;
                this.pagination.next = response.data.next_page_url;
                this.pagination.links = response.data.links;
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
    <!-- <PaginationUi></PaginationUi> -->

    <nav aria-label="Page navigation example">
        <ul class="pagination  m-5">
            <li class="page-item"
                v-for="link in pagination.links"
                @click="fetchProjects(link.url)">
                <a class="page-link" href="#" 
                v-html="link.label"></a>
            </li>
        </ul>
    </nav>


    <!-- <div class="next-prev-buttons m-5  d-flex justify-content-between">
    <button class="btn btn-primary" @click="fetchProjects(pagination.prev)">Previous page</button>
    <div  @click="fetchProjects(link.url)" 
    v-for="link in pagination.links">{{ link.label }} </div>
    <button class="btn btn-primary" @click="fetchProjects(pagination.next)">Next page</button>
    </div> -->

</div>


</template>



<style lang="scss">

</style>