<template>

    <h2 :style="styleObject" v-if="headingLevel == 2"> {{text}} </h2>
    <h3 :style="styleObject" v-else-if="headingLevel == 3"> {{text}} </h3>
    <h4 :style="styleObject" v-else-if="headingLevel == 4"> {{text}} </h4>
    <h5 :style="styleObject" v-else-if="headingLevel == 5"> {{text}} </h5>
    <h6 :style="styleObject" v-else-if="headingLevel == 6"> {{text}} </h6>
    <h1 :style="styleObject" v-else> {{text}} </h1>

</template>

<script>
  
  export default {
    name: 'HeadingBlock',
    props: {
        text: String,
        spaceBefore: Number,
        spaceAfter: Number,
        headingLevel: Number,
        styleObj: Object
    },
    data() {
        return {
            styleObject : {}
        }
    },
    created() {
        this.styleObject = { ... this.styleObj,
            marginTop: this.spaceBefore+'px' || '10px',
            marginBottom: this.spaceAfter+'px' || '10px'
        }
    }
  }
</script>

<style></style>