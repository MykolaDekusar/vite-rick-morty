<script>
import {store} from "../store";

export default {
    name:"SearchBar",
    emits:['cerca',],
    data(){
        return {
            store,
        };
    },
}
</script>
<template>
<div class="searchBar">
    <input v-model="store.name" type="text" placeholder="Search character">
    <select v-model="store.status" name="cards" id="card-select">
        <option value="">Select Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">unknown</option>
    </select>
    <div class="buttons">
        <button @click="$emit('cerca')" id="search">Search</button>
        <button id="reset">Reset</button>
    </div>
    
</div>

</template>

<style lang="scss" scoped>
@use '/src/assets/snippets/colors' as *;
.searchBar{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    input {
        padding-left: 1rem;
    }
}
.buttons{
    display: flex;
    gap: 1rem;
}

#search {
    background-color:$blue;
    color: white;
}
#reset {
    background-color: $orange;
}

#search,
#reset,
#card-select {
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>