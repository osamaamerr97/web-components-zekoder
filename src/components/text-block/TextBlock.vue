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
    },
    created() {
    }
  }
</script>

<style></style>