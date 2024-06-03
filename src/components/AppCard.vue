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
<template v-cloak>
    <div class="card">
        <img :src="image" :alt="name">
        <h3 class="name">{{ name }}</h3>
        <div class="info">
            <p class="status">{{ status }}</p>
            <p class="gender">{{ gender }}</p>
        </div>
    
    </div>
   
    
</template>

<style scoped>

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: calc(100%/4);
        img{
            border-radius: 50%;
            width: 280px;
        }
        .name{
            margin-top: 1rem;
        }
        .info {
            margin: 3rem 0;
        }
}

@media screen and (max-width:1200px) {
    .card {
        width:calc(100%/3)
    }
} 
@media screen and (max-width:900px) {
    .card {
        width:calc(100%/2)
    }
} 
@media screen and (max-width:600px) {
    .card {
        width:100%
    }
} 


</style>