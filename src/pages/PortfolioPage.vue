<script>
import ProjectList from '../components/projects/projectlist.vue';

export default {
    data() {
        return {
            title: 'Blog-Projects'
        }
    },
    components: {ProjectList},
}

</script>


<template>
    <h1>{{ title }}</h1>
    <ProjectList></ProjectList>
</template>