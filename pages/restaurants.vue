<template>
    <main class="container restaurant">
        <div class="restaurantheading">
            <h1>Restaurants</h1>
            <AppSelect @change="selectedRestaurant = $event" />
        </div>

        <AppRestaurantInfo :data = 'filteredRestaurants' />
        
    </main>
</template>
<script>

import { mapState } from 'vuex'

export default {
    data() {
        return {
            selectedRestaurant : ''
        }
    },
    computed: {
        ...mapState(["fooddata"]),

        filteredRestaurants(){
            if (this.selectedRestaurant){
                return this.fooddata.filter( el =>{
                    let name = el.name.toLowerCase()
                    return name.includes(this.selectedRestaurant);
                })
            }else{
                return this.fooddata
            }
        }
    },
}
</script>
<style lang="">
    
</style>