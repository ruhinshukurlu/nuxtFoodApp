<template>
  <section class="restaurantinfo">
    <div v-for="store in fooddata" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Tating {{ store.rating }}</p>

      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>

      <div class="row">
        <div
          class="items"
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          :style="`background : url(${menuitem.img})no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuitem.item }}</h4>
              <p>{{ priceFormatter(menuitem.price) }}</p>
            </div>
            <button class="ghost">View Item</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["fooddata"]),
  },

  methods : {
      priceFormatter(item){
        return '$'+item.toFixed(2)
      }
  }
};
</script>
<style lang="">
</style>