<script>
import AppTitle from './components/AppTitle.vue'
import AppFoundN from './components/AppFoundN.vue'
import AppCard from './components/AppCard.vue'
import AppJumbotron from './components/AppJumbotron.vue'
import axios from "axios"

export default {
    name:"Main",
    components:{
        AppTitle,
        AppFoundN,
        AppCard,
        AppJumbotron
    },

    data(){
        return{
            list:null,
        } 
    },

    created(){
      axios.get("https://rickandmortyapi.com/api/character")
      .then(response =>{
        this.list=(response.data.results);
        console.log(this.list);
      })
    }
}

</script>

<template>
    <AppTitle/>
    <AppJumbotron/>
    <div class="container">
        <AppCard v-for="info in list" :image="info.image" :name="info.name" :status="info.status" :gender="info.gender"/>
    </div>

header
jumbotron search bar
cards
footer
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}


</style>
