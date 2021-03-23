<template>
    <div>
        <label :for="select">Choose a {{ select }} :</label>
        <select @change="$emit('change', $event.target.value)" :name="select" :id="select">
            <option value>Please select {{select}}</option>
            <option v-for='option in selectOptions' :key='option' :value="option">{{ option }}</option>
        </select>
    </div>
</template>
<script>
export default {
    
    props : {
       select : {
           type : String,
           default : 'restaurant'
       },
       selectOptions : {
           type : Array,
           default : () => ['pizza', 'tacos', 'dim sum']
       } 
    }
}
</script>
<style lang="">
    
</style>