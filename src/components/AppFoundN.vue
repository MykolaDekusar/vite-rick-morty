<script>
import {store} from "../store";
export default {
    name:"FoundTimes",
    data(){
        return{
            store,
        }
    }
}
</script>
<template>
    <h4>Found {{ store.count }} characters</h4>
</template>

<style scoped>
h4 {
    text-align: center;
    margin-bottom: 3rem;
}
</style>