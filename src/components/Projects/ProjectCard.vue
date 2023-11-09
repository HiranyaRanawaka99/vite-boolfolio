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
            <span
                class="badge"
                :style="{ backgroundColor: project.type.color }">
                {{ project.type.tag }}
            </span>
        </div>
        <div class="card-body">
        <h5 class="text-center"> {{ project.title }}</h5>
        
            <img 
            v-if="project.cover_image" 
            :src="project.cover_image" 
            class="img-fluid mb-1 rounded" 
            :class="{
                'float-end': isDetail,
                'w-50': isDetail,
                'ms-1': isDetail,
                }"
            >

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

    
            >
            <router-link 
            :to ="{ name: 'projectdetailpage', params: {id: project.id}}"> <button class="btn btn-primary"> Vedi </button> 
            </router-link>
        </div>
    </div>
</div>

</template>

<style lang="scss">
</style>