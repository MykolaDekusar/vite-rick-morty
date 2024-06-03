<script>
export default {
    name:"Card",
    // INFO
    props:{
        image:String,
        name:String,
        status:String,
        gender:String,
    }
}
</script>
<template>
    <div class="card">
        <img :src="image" :alt="name">
    </div>
   
    
</template>

<style scoped>

.card{
    width: calc(100%/4);
    img{
        border-radius: 50%;
    }
}


</style>