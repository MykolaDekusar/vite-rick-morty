<script>
import AppTitle from './AppTitle.vue'
import AppFoundN from './AppFoundN.vue'
import AppCard from './AppCard.vue'
import AppFind from './AppFind.vue'
import AppLoader from './AppLoader.vue'
import {store} from "../store";
import axios from "axios"

export default {
    name:"Main",
    components:{
        AppTitle,
        AppFoundN,
        AppCard,
        AppFind,
        AppLoader
    },

    data(){
        return{
            list:null,
            store,
        };
    },
    methods:{
        hideNSHow(){
            this.store.show=true;
        },
        findEmit(){
            this.store.show=false;
            axios.get(`https://rickandmortyapi.com/api/character`, {
                params: {
                    name:this.store.name,
                    status:this.store.status,
                }
            })
            .then(response =>{
            setTimeout(this.hideNSHow, 200);
            this.list=(response.data.results);
            this.store.count=response.data.info.count;
      }).catch(error => {
        console.log(error);
      })
        },
    },

    mounted(){
        axios.get(`https://rickandmortyapi.com/api/character`).then(response =>{
        setTimeout(this.hideNSHow, 200);
        this.list=response.data.results;
        this.store.count=response.data.info.count;
      })
    }
}

</script>

<template>
    <AppLoader v-if="!store.show"/>
    <div v-else>
        <AppTitle/>
        <AppFind :info="list" @cerca="findEmit"/>
        <div class="container">
            <AppCard v-for="(info, index) in list" :key="index" :image="info.image" :name="info.name" :status="info.status" :gender="info.gender"/>
        </div>
        <AppFoundN/>
    </div>
</template>

<style scoped lang="scss">
@use '/src/assets/snippets/utilities' as *;
</style>

