<template>

    <img 
        :src="url"
        :alt="altText"
        :width="width"
        :height="height"
        :style="styleObject"
    >

</template>

<script>
  
  export default {
    name: 'Image',
    props: {
        url: String,
        altText: String,
        width: Number,
        height: Number,
        styleObj: Object
    },
    data() {
        return {
            styleObject : {}
        }
    },
    created() {
        this.styleObject = { ... this.styleObj,
        borderRadius: '50%'
        }
    }
  }
</script>

<style></style>