<script>
// import axios from 'axios';
// import {store} from '../../data/store';

// export default {
//   data() {
//     return {
//         projects: [],

//         pagination: {
//           next: null,
//           prev: null,
//           //array di tutti i link a cui posso andare
//           links: null,
//         }
//       };  
//     },

//     methods: {
//         fetchProjects(uri = store.api.baseUrl + 'projects') {
//             axios
//             .get(uri)
//             .then((response) => {
//                 this.projects = response.data.data;
                
//                 this.pagination.prev = response.data.prev_page_url;
//                 this.pagination.next = response.data.next_page_url;
//                 this.pagination.links = response.data.links;
//             });
//         },
//     },
    
//     created() {
//         this.fetchProjects();
//     },
// }

</script>

<template>
     <!-- <nav aria-label="Page navigation example">
        <ul class="pagination  m-5">
            <li><button class="btn btn-primary" @click="fetchProjects(pagination.prev)">Previous page</button> </li>

            <li class="page-item"
                v-for="link in pagination.links"
                @click="fetchProjects(link.url)">
                <a class="page-link"
                herf="#"
                v-html="link.label"></a>
            </li>

            <li><button class="btn btn-primary" @click="fetchProjects(pagination.next)">Next page</button></li>
        </ul>
    </nav> -->

</template>

<style lang="scss"></style>