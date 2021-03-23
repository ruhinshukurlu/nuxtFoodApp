<template>
    <div class="header-img">
        <h1>Nuxt Food App</h1>
        <button>See restaurants ></button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header-img{
        /* width: 100%; */
        height: 70vh;
        background: url(~assets/images/headerimg.jpg)no-repeat center center;
        background-size: cover;
        padding: 40px;
    }

    h1{
        color: #fff;
        font-size: 52px;
        font-style: normal;
        letter-spacing: 2px;
    }
</style>