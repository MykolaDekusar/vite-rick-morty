<script>
export default {
    name:"SearchBar",
}
</script>
<template>
<div class="searchBar">
    <input type="text" placeholder="Search character">
    <select name="cards" id="card-select">
        <option value="">Select Status</option>
        <option value="alive">Alive</option>
        <option value="human">human</option>
    </select>
    <button id="search">Search</button>
    <button id="reset">Reset</button>
</div>

</template>

<style lang="scss" scoped>
@use '/src/assets/snippets/colors' as *;
.searchBar{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
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