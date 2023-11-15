<script>


export default {
    data() {
        return { }
    },

    props: {
        project: Object,
        isDetail: Boolean,
    }


}

</script>

<template>

<div class="col">
    <div class="card h-100">
        <div class="card-header">
            <div
                class="badge"
                v-if="project.type"
                :style="{ backgroundColor: project.type.color }">
                <router-link
                :to= "{
                    name: 'blog-category',
                    params: {
                    type_id: project.type_id
                    }
                }">
                <p > {{ project.type.tag  }}</p>
            </router-link>
            </div>
            <div v-else> Non categorizzato </div>
        </div>
        <div class="card-body">
        <h5 class="text-center"> {{ project.title }}</h5>
       
            <!-- <img 
            v-if="project.cover_image" 
            :src="project.cover_image" 
            class="img-fluid mb-1 rounded" 
            > -->

            <p> <b>Descrizione:</b> {{ project.description }}</p>
            <p> <b>Data:</b>{{ project.date }}</p>
            <p> <b>Link: </b>
                <a href="javascript:void(0)">{{ project.link }}</a>
            </p>
            <p>
                <b>Tecnologie: </b> 
                <span class="badge rounded-pill"
                v-for="(technology, index) in project.technologies"
                :key="index"
                :style="{ backgroundColor: technology.color }">
                {{ technology.label }}
            </span>
            </p>
        </div>
        <div 
        class="card-footer"
        v-if="!isDetail">
            <router-link 
            :to ="{ name: 'projectdetailpage', params: {id: project.id}}"> <button class="btn btn-primary"> Vedi </button> 
            </router-link>
        </div>
    </div>
</div>

</template>

<style lang="scss">
</style>