<template>

    <p v-bind:style="styleObject"> 
        <span v-if="text"> {{text}} </span>
        <template v-else-if="html" v-html="html"></template>
    </p>

</template>

<script>
  
  export default {
    name: 'TextBlock',
    props: ['text', 'spaceBefore', 'spaceAfter', 'headingLevel', 'html', 'lineBreaks', 'styleObj'],
    data() {
        return {
            styleObject : {
                
            }
        }
    },
    methods: {
        
    },
    created() {
        let marginB = this.spaceAfter || 10;
        marginB += this.lineBreaks? this.lineBreaks*10 : 0;
        this.styleObject = { ... this.styleObj,
            marginTop: this.spaceBefore || '10px',
            marginBottom: marginB + 'px'
        }
    }
  }
</script>

<style></style>