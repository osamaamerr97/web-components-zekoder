<template>

    <h1 v-bind:style="styleObject" v-if="headingLevel == 1"> {{text}} </h1>
    <h2 v-bind:style="styleObject" v-if="headingLevel == 2"> {{text}} </h2>
    <h3 v-bind:style="styleObject" v-if="headingLevel == 3"> {{text}} </h3>
    <h4 v-bind:style="styleObject" v-if="headingLevel == 4"> {{text}} </h4>
    <h5 v-bind:style="styleObject" v-if="headingLevel == 5"> {{text}} </h5>
    <h6 v-bind:style="styleObject" v-if="headingLevel == 6"> {{text}} </h6>

</template>

<script>
  
  export default {
    name: 'HeadingBlock',
    props: ['text', 'spaceBefore', 'spaceAfter', 'headingLevel', 'styleObj'],
    data() {
        return {
            styleObject : {}
        }
    },
    methods: {
        
    },
    created() {
        
        this.styleObject = { ... this.styleObj,
            marginTop: this.spaceBefore || '10px',
            marginBottom: this.spaceAfter || '10px'
        }
    }
  }
</script>

<style></style>