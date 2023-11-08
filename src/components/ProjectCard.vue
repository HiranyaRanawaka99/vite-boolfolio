<script>


export default {
    data() {
        return { }
    },

    props: {
        project: Object,
    }


}

</script>

<template>

<div class="col">
    <div class="card h-100">
        <div class="card-header">
            <span class="badge" :style = "{backgroundColor: project.technologies.color}"> {{ project.technologies.label }}</span>
        </div>
        <div class="card-body">
        <h5 class="text-center"> {{ project.title }}</h5>
            <hr>
            <p> Descrizione: {{ project.description }}</p>
            <p> Data:{{ project.date }}</p>
            <p> Link:
                <a href="javascript:void(0)">{{ project.link }}</a>
            </p>
        </div>
    </div>
</div>

</template>

<style lang="scss">
</style>