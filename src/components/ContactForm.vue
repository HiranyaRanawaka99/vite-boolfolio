<script>
import axios from 'axios';
import {store} from '../data/store';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    methods: {
        sendMessage() {
            if(!this.name || !this.email || !this.message) return;

            const data= {
                email:this.email,
                name: this.name,
                message: this.message
            }
            axios
             .post(store.api.baseUrl + 'message', data,)
             .then((response) => {
                console.log(response);

             });
        },
    },
};


</script>

<template>
    <form 
        action=""
        method="POST">

        <div class="mb-3">
            <label for="contactform-name" class="form-label">Nome</label>
            <input
            v-model="name"
             type="email" class="form-control" id="contactform-name" placeholder="Inserisci il tuo nome">
        </div>
        <div class="mb-3">
            <label for="contactform-email" class="form-label">Email</label>
            <input
            v-model="email"
             type="email" class="form-control" id="contactform-email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="contactform-message" class="form-label">Messaggio</label>
            <textarea
            v-model="message"
             class="form-control" id="contactform-message" rows="3"></textarea>
        </div>
    </form>
    <button class="btn btn-success" @click="sendMessage()">
        <font-awesome-icon icon="paper-plane"/> Invia
    </button>
</template>


<style lang="scss" scoped>
</style>