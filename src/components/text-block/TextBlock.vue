<template>

    <p :style="styleObj"> 
        <span v-if="text"> {{text}} </span>
    </p>

</template>

<script>
  
  export default {
    name: 'ZekText',
    props: {
        text: String,
        lineBreaks: Number,
        styleObj: Object
    },
    data() {
        return{}
    },
    created() {
    }
  }
</script>

<style lang="scss"></style>