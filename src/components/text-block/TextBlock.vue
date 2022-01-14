<template>

    <p :style="styleObject"> 
        <span v-if="text"> {{text}} </span>
        <template v-else-if="html" v-html="html"></template>
    </p>

</template>

<script>
  
  export default {
    name: 'TextBlock',
    props: {
        text: String,
        spaceBefore: Number,
        spaceAfter: Number,
        lineBreaks: Number,
        styleObj: Object
    },
    data() {
        return {
            styleObject : {}
        }
    },
    created() {
        let marginB = this.spaceAfter || 10;
        marginB += this.lineBreaks? this.lineBreaks*10 : 0;
        this.styleObject = { ... this.styleObj,
            marginTop: this.spaceBefore+'px' || '10px',
            marginBottom: marginB + 'px'
        }
    }
  }
</script>

<style></style>