<script>

import axios from 'axios';
import {store} from '../../data/store'


export default {

props: { pagination: Array },
emits: ['change-page']

}

</script>


<template>

<div class="container">
    <nav aria-label="..." class="mt-3">
        <ul class="pagination">
            <!-- comodo per getire tante classi -->
            <li class="page-item "
            :class= "{
                disabled: !link.url
            }"
            v-for="link in pagination"
            @click="$emit('change-page', link.url)">
            <a class="page-link" 
            :class=" link.active ? 'active': ''"
            v-html="link.label"></a>
            </li>
        </ul>
    </nav>
</div>

</template>



<style lang="scss">

</style>