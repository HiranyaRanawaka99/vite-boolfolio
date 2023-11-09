<script>
import NavbarUi from './components/ui/NavbarUi.vue';
import { router } from './router';

export default {
  data() {
    return {
    }  
  },
  components: { NavbarUi, router },

}

</script>


<template>
  <NavbarUi></NavbarUi>
  <router-view></router-view>

</template>



<style lang="scss">

</style>