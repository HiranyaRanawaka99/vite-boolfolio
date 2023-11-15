<script>
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
<ProjectCard 
:project="project"
v-if="project"
:isDetail = "true">

</ProjectCard>

</template>

