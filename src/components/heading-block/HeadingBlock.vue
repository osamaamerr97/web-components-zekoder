<template>

    <h2 :style="styleObj" v-if="headingLevel == 2"> {{text}} </h2>
    <h3 :style="styleObj" v-else-if="headingLevel == 3"> {{text}} </h3>
    <h4 :style="styleObj" v-else-if="headingLevel == 4"> {{text}} </h4>
    <h5 :style="styleObj" v-else-if="headingLevel == 5"> {{text}} </h5>
    <h6 :style="styleObj" v-else-if="headingLevel == 6"> {{text}} </h6>
    <h1 :style="styleObj" v-else> {{text}} </h1>

</template>

<script>
  
  export default {
    name: 'ZekHeading',
    props: {
        text: String,
        headingLevel: Number,
        styleObj: Object
    },
    data() {
    },
    created() {
    }
  }
</script>

<style></style>