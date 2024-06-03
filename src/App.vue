<script>
import AppTitle from './components/AppTitle.vue'
import AppFoundN from './components/AppFoundN.vue'
import AppCard from './components/AppCard.vue'
import AppJumbotron from './components/AppJumbotron.vue'
import AppLoader from './components/AppLoader.vue'
import axios from "axios"


export default {
    name:"Main",
    components:{
        AppTitle,
        AppFoundN,
        AppCard,
        AppJumbotron,
        AppLoader
    },

    data(){
        return{
            list:null,
            show:false,
        } 
    },
    methods:{
        hideNSHow(){
            this.show=true;
        }
    },

    mounted(){
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response =>{
        this.list=(response.data.results);
      })
      setTimeout(this.hideNSHow, 500);
    }
}

</script>

<template >
    <AppLoader v-if="!show"/>
    <div v-else>
        <AppTitle/>
        <AppJumbotron/>
        <div class="container">
            <AppCard v-for="info in list" :image="info.image" :name="info.name" :status="info.status" :gender="info.gender"/>
        </div>
        <AppFoundN/>
</div>
   
</template>

<style scoped lang="scss">
@use '/src/assets/snippets/utilities' as *;

</style>
