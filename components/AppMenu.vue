<template >
    <nav>
        <ul>
            <li>
                <nuxt-link to="/">
                    <AppLogo />
                </nuxt-link>
            </li>
            <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
        </ul>
        <div class="smallnum" v-if="cartCount > 0">{{cartCount}}</div>
        <nuxt-link to="/cart">Cart</nuxt-link>
    </nav>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
    computed : {
        ...mapGetters(['cartCount'])
    }    
}
</script>
<style lang="">
    
</style>