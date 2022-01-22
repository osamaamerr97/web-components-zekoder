<template>

    <a 
        v-if="sourceUrl" 
        :href="sourceUrl" 
        :target="'_'+(sourceTarget || 'self')"
    >
        <img 
            :src="imageUrl"
            :alt="altText"
            :style="styleObject"
            @mouseenter="onHover()"
            @mouseout="onHoverOut()"
        >
    </a>
    <img 
        v-else
        :src="imageUrl"
        :alt="altText"
        :style="styleObject"
        @mouseenter="onHover()"
        @mouseout="onHoverOut()"
    >

</template>

<script>
  
  export default {
    name: 'Image',
    props: {
        url: String,
        imageColor: String,
        altText: String,
        sourceUrl: String,
        sourceTarget: String,
        width: String,
        height: String,
        hover: Object,
        styleObj: Object
    },
    data() {
        return {
            styleObject : {},
            imageUrl: null
        }
    },
    created() {
        this.styleObject = { 
            ...this.styleObj,
            width: isNaN(+this.width) ? this.width : this.width+'px',
            height: isNaN(+this.height) ? this.height : this.height+'px'
        };
        this.imageUrl = this.url;
        if ( this.imageColor === 'greyscale' ) {
            this.styleObject['filter'] = 'grayscale(100%)';
        }
    },
    methods: {
        onHover() {
            if ( this.hover ) {
                if ( this.hover.action === 'greyscale' ) {
                    this.styleObject['filter'] = 'grayscale(100%)';
                } else if ( this.hover.action === 'normal' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'text' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'picture' ) {
                    this.imageUrl = this.hover.alternatePicture;
                } 
            }
        },
        onHoverOut() {
            if ( this.hover ) {
                if ( this.hover.action === 'greyscale' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'normal' ) {
                    this.styleObject['filter'] = 'grayscale(100%)';
                } else if ( this.hover.action === 'text' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'picture' ) {
                    this.imageUrl = this.url;
                } 
            }
        }
    }
  }
</script>

<style>

</style>