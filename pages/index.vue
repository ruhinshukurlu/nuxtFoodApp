<template>
  <main class="container">
      <AppHeader />
      <AppRestaurantInfo :data='fooddata' />
  </main>
</template>

<script>

import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['fooddata'])
  },
}
</script>

<style>

</style>
